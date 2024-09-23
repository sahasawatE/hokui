import { CalendarProps as AriaCalendarProps, DateValue } from "react-aria-components";
import type { Color } from "../types/prop.type";
type customProps = {
    color?: Color;
};
export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, "visibleDuration">, customProps {
    errorMessage?: string;
}
export declare function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function CalendarHeader(): import("react/jsx-runtime").JSX.Element;
export declare function CalendarGridHeader(): import("react/jsx-runtime").JSX.Element;
export {};
