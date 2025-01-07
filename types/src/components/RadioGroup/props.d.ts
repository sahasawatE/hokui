import { ReactNode } from "react";
import { RadioGroupProps as RACRadioGroupProps, RadioProps as RACRadioProps, ValidationResult } from "react-aria-components";
import type { Color } from "../types/prop.type";
export interface RadioGroupContext {
    color?: Color;
}
export interface RadioGroupProps<T> extends Omit<RACRadioGroupProps, "children">, RadioGroupContext {
    label?: string;
    children?: (option: T) => ReactNode;
    options: T[];
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export interface RadioProps extends Omit<RACRadioProps, "children"> {
    children: ReactNode;
}
