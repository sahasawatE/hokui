import { DateFieldProps as AriaDateFieldProps, DateInputProps, DateValue, ValidationResult } from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
type CustomProps = {
    variant?: InputVariant;
    color?: Color;
    rounded?: Rounded;
};
export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T>, CustomProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DateInput(props: Omit<DateInputProps, "children"> & CustomProps): import("react/jsx-runtime").JSX.Element;
export {};
