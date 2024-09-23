import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
type customProps = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T>, customProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DatePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DatePickerProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
