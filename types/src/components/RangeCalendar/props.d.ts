import type { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from "react-aria-components";
import type { Color } from "../types/prop.type";
type customRangeCalendarProps = {
    color?: Color;
};
export interface RangeCalendarProps<T extends DateValue = DateValue> extends Omit<AriaRangeCalendarProps<T>, "visibleDuration">, customRangeCalendarProps {
    errorMessage?: string;
}
export {};
