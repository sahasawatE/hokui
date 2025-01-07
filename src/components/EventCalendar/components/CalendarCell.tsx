import { useCallback, useContext, useRef } from "react";
import { Card } from "../../Card";
import { Dialog } from "../../Dialog";
import { CalendarContext } from "./context";
import { RenderSlot } from "./slotted";
import { RenderDialogContent } from "./RenderDialogContent";
import { callStyle } from "../style";
import type { CalendarCellProps } from "../props";
import { useCalendarCell } from "react-aria";

export function CalendarCell({ state, date, event }: CalendarCellProps) {
  const ctx = useContext(CalendarContext);
  const ref = useRef(null);
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
