import React, { createContext } from "react";
import type { CalendarEvent, CalendarEventColor } from "../../types/prop.type";

export const CalendarContext = createContext<{
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
