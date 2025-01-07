import { ReactNode } from "react";
import { CheckboxGroupProps as AriaCheckboxGroupProps, CheckboxProps as AriaCheckboxProps, ValidationResult } from "react-aria-components";
import type { Color } from "../types/prop.type";
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "children"> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export interface CheckboxProps extends Omit<AriaCheckboxProps, "children"> {
    children?: ReactNode;
    color?: Color;
}
