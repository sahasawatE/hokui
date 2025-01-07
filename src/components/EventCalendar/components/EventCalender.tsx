import { useCalendar, useLocale } from "react-aria";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";
import { Button } from "../../Button";
import { CalendarContext } from "./context";
import { CalendarGrid } from "./CalendarGrid";
import type { EventCalendarProps } from "../props";

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
