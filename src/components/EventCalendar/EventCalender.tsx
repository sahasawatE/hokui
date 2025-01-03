import React, { createContext, useCallback, useContext } from "react";
import useSlot from "react-use-slots";
import { twMerge } from "tailwind-merge";
import {
  useCalendar,
  useLocale,
  useCalendarGrid,
  useCalendarCell,
  type DateValue,
  type AriaCalendarProps,
  type AriaCalendarGridProps,
} from "react-aria";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendarState, type CalendarState } from "react-stately";
import {
  getWeeksInMonth,
  createCalendar,
  type CalendarDate,
} from "@internationalized/date";
import { Button } from "../Button";
import { Card } from "../Card";
import type {
  CalendarEvent,
  CalendarEventColor,
  CalendarEventDetail,
} from "../types/prop.type";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import { Dialog } from "../Dialog";

const CalendarContext = createContext<{
  events?: CalendarEvent[];
  color?: CalendarEventColor;
  viewTitle?: string;
  displayDate?: string;
  children?: React.ReactNode;
  eventsDialog?: (
    dialogProps?: CalendarEvent & { displayDate: string },
  ) => React.ReactNode;
  onClickDay?: (events?: CalendarEvent & { displayDate: string }) => void;
  onClickViewAll?: (events?: CalendarEvent & { displayDate: string }) => void;
}>({
  events: [],
  color: [],
  displayDate: "",
  viewTitle: "",
});

type AvailableSlotName = "header-content";

function RenderSlot(
  children: React.ReactNode,
  slotName?: AvailableSlotName,
  element?: () => React.ReactElement,
) {
  const [slot, hasSlot] = useSlot(children);

  if (slotName && element) {
    if (hasSlot(slotName)) {
      return slot(slotName);
    }

    return element();
  }

  return slot();
}

export interface EventCalendarProps<T extends DateValue = DateValue>
  extends AriaCalendarProps<T> {
  events?: CalendarEvent[];
  eventColors?: CalendarEventColor;
  viewTitle?: string;
  children?: React.ReactNode;
  eventsDialog?: (
    dialogProps?: CalendarEvent & { displayDate: string },
  ) => React.ReactNode;
  onClickDay?: (events?: CalendarEvent & { displayDate: string }) => void;
  onClickViewAll?: (events?: CalendarEvent & { displayDate: string }) => void;
}

export function EventCalendar(props: EventCalendarProps) {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  return (
    <div
      {...calendarProps}
      className="flex flex-col gap-6 justify-center w-full"
    >
      <div className="flex flex-row items-center justify-center gap-4">
        <Button variant="icon" {...prevButtonProps}>
          <ChevronLeft aria-hidden />
        </Button>
        <h2>{title}</h2>
        <Button variant="icon" {...nextButtonProps}>
          <ChevronRight aria-hidden />
        </Button>
      </div>
      <CalendarContext.Provider
        value={{
          events: props.events,
          color: props.eventColors,
          displayDate: title,
          viewTitle: props.viewTitle ?? "view all",
          children: props.children,
          eventsDialog: props.eventsDialog,
          onClickDay: props.onClickDay,
          onClickViewAll: props.onClickViewAll,
        }}
      >
        <CalendarGrid state={state} />
      </CalendarContext.Provider>
    </div>
  );
}

interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState;
}

function CalendarGrid({ state, ...props }: CalendarGridProps) {
  const ctx = useContext(CalendarContext);
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  const findEvent = (date: CalendarDate | null) => {
    if (!ctx.events || date === null) return undefined;

    const d = ctx.events.find((e) => e.day === date.toString());
    if (!d) return undefined;

    return d.events;
  };

  const dayStyle = (isWeekend: boolean) => {
    if (isWeekend) return "bg-danger-50 text-danger";

    return "bg-default-100 text-default";
  };

  return (
    <div {...gridProps} className="flex flex-col gap-4">
      <div {...headerProps} className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={twMerge(
              "px-3 rounded h-8 flex flex-row items-center",
              dayStyle(index === 0 || index === 6),
            )}
          >
            {day}.
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {[...new Array(weeksInMonth)].map((_e, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-2">
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    event={findEvent(date)}
                  />
                ) : (
                  <div key={i} />
                ),
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

const callStyle = tv({
  extend: focusRing,
  base: "h-full",
  variants: {
    isDisabled: {
      true: "text-gray-300 border-black/5 cursor-not-allowed",
    },
    isUnavailable: {
      true: "text-gray-300 border-black/5 cursor-not-allowed",
    },
  },
});

interface CalendarCellProps {
  state: CalendarState;
  date: CalendarDate;
  event?: CalendarEventDetail[];
}

function CalendarCell({ state, date, event }: CalendarCellProps) {
  const ctx = useContext(CalendarContext);
  const ref = React.useRef(null);
  const {
    cellProps,
    buttonProps,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  const groupEvent = () => {
    const result: { type: string; details: string[] }[] = [];

    if (event) {
      event.forEach((e) => {
        const r = result.findIndex((f) => f.type === e.type);
        if (r >= 0 && result[r]) {
          result[r].details.push(e.details);
        } else {
          result.push({ type: e.type, details: [e.details] });
        }
      });
    }

    return result;
  };

  const chipBg = useCallback(
    (type: string) => {
      if (!ctx.color) return { color: "#fff", text: "#000" };

      const found = ctx.color.find((e) => e.type === type);
      if (!found) return { color: "#fff", text: "#000" };

      return { color: found.color, text: found.textColor ?? "white" };
    },
    [ctx.color],
  );

  const cb = () => {
    if (ctx.events) {
      const foundEvents = ctx.events.find((e) => e.day === date.toString());
      return foundEvents
        ? {
            ...foundEvents,
            displayDate: ctx.displayDate ?? "",
          }
        : undefined;
    }

    return undefined;
  };

  return (
    <div {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={callStyle({
          isDisabled,
          isUnavailable,
        })}
        onClick={() => {
          if (ctx.onClickDay) {
            ctx.onClickDay(cb());
          }
        }}
      >
        <Card
          title={formattedDate}
          shadow="none"
          rounded="sm"
          classNames={{ base: "pt-1 pb-2 px-2 h-full max-xl:hidden" }}
        >
          <div slot="header-actions">
            {RenderSlot(ctx.children, "header-content", () => (
              <div className="flex flex-row gap-1">
                {groupEvent().length ? (
                  groupEvent().map((e, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: chipBg(e.type).color,
                        color: chipBg(e.type).text,
                      }}
                      className="text-sm px-2 py-[0.5px] rounded-xs text-white"
                    >
                      {e.details.length}
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
          {event && (
            <div className="flex-row justify-end flex">
              <Dialog
                activator={
                  <div
                    onClick={() => {
                      if (ctx.onClickViewAll) {
                        ctx.onClickViewAll(cb());
                      }
                    }}
                  >
                    <span>
                      {ctx.viewTitle} ({event.length})
                    </span>
                  </div>
                }
              >
                <RenderDialogContent
                  cb={cb}
                  chipBg={chipBg}
                  event={event}
                  date={date}
                />
              </Dialog>
            </div>
          )}
        </Card>
        <Dialog
          activatorClassName="w-full h-full xl:hidden border p-2 bg-white rounded-sm"
          activator={
            <div className="flex flex-col gap-2 justify-start">
              <span className="text-xl">{formattedDate}</span>
              <div className="flex flex-row justify-end gap-1">
                {groupEvent().length ? (
                  groupEvent().map((e, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: chipBg(e.type).color,
                        color: chipBg(e.type).text,
                      }}
                      className="rounded-full h-2 w-2"
                    ></div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          }
          className="p-0"
        >
          <RenderDialogContent
            cb={cb}
            chipBg={chipBg}
            event={event}
            date={date}
          />
        </Dialog>
      </div>
    </div>
  );
}

function RenderDialogContent({
  cb,
  chipBg,
  event,
  date,
}: {
  cb: () =>
    | {
        displayDate: string;
        day: string;
        events: CalendarEventDetail[];
      }
    | undefined;
  chipBg: (type: string) => {
    color: string;
    text: string;
  };
  event: CalendarEventDetail[] | undefined;
  date: CalendarDate;
}) {
  const ctx = useContext(CalendarContext);

  return (
    <div className="max-w-96 overflow-scroll no-scrollbar p-2">
      {ctx.eventsDialog ? (
        ctx.eventsDialog(cb())
      ) : (
        <div className="flex flex-col gap-4">
          <div>{`${date.day} ${ctx.displayDate}`}</div>

          <div className="max-h-80 overflow-scroll no-scrollbar">
            {event ? (
              event.map((ev, i) => (
                <div key={i} className="flex flex-row items-center gap-4">
                  <div
                    className="h-2 max-h-2 min-h-2 w-2 max-w-2 min-w-2 rounded-full"
                    style={{
                      backgroundColor: chipBg(ev.type).color,
                    }}
                  />
                  <span className="text-nowrap">{ev.details}</span>
                </div>
              ))
            ) : (
              <div className="flex flexrow justify-center text-gray-300">
                No Item.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
