import { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from "react-aria-components";
export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>): import("react/jsx-runtime").JSX.Element;
