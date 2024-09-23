import { ReactNode } from "react";
import { CheckboxGroupProps as AriaCheckboxGroupProps, CheckboxProps, ValidationResult } from "react-aria-components";
import type { Color } from "../types/prop.type";
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, "children"> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export interface cbProps extends Omit<CheckboxProps, "children"> {
    children?: ReactNode;
    color?: Color;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare function Checkbox(props: cbProps): import("react/jsx-runtime").JSX.Element;
