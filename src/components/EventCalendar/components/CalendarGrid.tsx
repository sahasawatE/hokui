import { useContext } from "react";
import { useCalendarGrid, useLocale } from "react-aria";
import { twMerge } from "tailwind-merge";
import { getWeeksInMonth, type CalendarDate } from "@internationalized/date";
import { CalendarCell } from "./CalendarCell";
import { CalendarContext } from "./context";
import type { CalendarGridProps } from "../props";

export function CalendarGrid({ state, ...props }: CalendarGridProps) {
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
