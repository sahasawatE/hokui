import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
type customProps = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T>, customProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateRangePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DateRangePickerProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
