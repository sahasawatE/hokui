import { ReactNode } from "react";
import { RadioGroupProps as RACRadioGroupProps, RadioProps, ValidationResult } from "react-aria-components";
import type { Color } from "../types/prop.type";
type CustomProps = {
    color?: Color;
};
export interface RadioGroupProps<T> extends Omit<RACRadioGroupProps, "children"> {
    label?: string;
    children?: (option: T) => ReactNode;
    options: T[];
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function RadioGroup<T extends {
    [key: string]: any;
    value: string;
    title: string;
}>(props: RadioGroupProps<T> & CustomProps): import("react/jsx-runtime").JSX.Element;
export declare function Radio(props: RadioProps & CustomProps): import("react/jsx-runtime").JSX.Element;
export {};
