import { type AriaCalendarGridProps, type DateValue, type AriaCalendarProps } from "react-aria";
import type { CalendarEvent, CalendarEventColor, CalendarEventDetail } from "../types/prop.type";
import type { CalendarState } from "react-stately";
import { type CalendarDate } from "@internationalized/date";
export type AvailableSlotName = "header-content";
export interface EventCalendarProps<T extends DateValue = DateValue> extends AriaCalendarProps<T> {
    events?: CalendarEvent[];
    eventColors?: CalendarEventColor;
    viewTitle?: string;
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
}
export interface CalendarGridProps extends AriaCalendarGridProps {
    state: CalendarState;
}
export interface CalendarCellProps {
    state: CalendarState;
    date: CalendarDate;
    event?: CalendarEventDetail[];
}
interface ReturnCallBack {
    displayDate: string;
    day: string;
    events: CalendarEventDetail[];
}
interface ChipBg {
    color: string;
    text: string;
}
export interface RenderDialogContentProps {
    cb: () => ReturnCallBack | undefined;
    chipBg: (type: string) => ChipBg;
    event?: CalendarEventDetail[];
    date: CalendarDate;
}
export {};
