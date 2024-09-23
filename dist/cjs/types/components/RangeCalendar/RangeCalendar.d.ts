import { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from "react-aria-components";
import type { Color } from "../types/prop.type";
type customProps = {
    color?: Color;
};
export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, "visibleDuration">, customProps {
    errorMessage?: string;
}
export declare function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
