import React from "react";
import type { CalendarEvent, CalendarEventColor } from "../../types/prop.type";
export declare const CalendarContext: React.Context<{
    events?: CalendarEvent[];
    color?: CalendarEventColor;
    viewTitle?: string;
    displayDate?: string;
    children?: React.ReactNode;
    eventsDialog?: (dialogProps?: CalendarEvent & {
        displayDate: string;
    }) => React.ReactNode;
    onClickDay?: (events?: CalendarEvent & {
        displayDate: string;
    }) => void;
    onClickViewAll?: (events?: CalendarEvent & {
        displayDate: string;
    }) => void;
}>;
