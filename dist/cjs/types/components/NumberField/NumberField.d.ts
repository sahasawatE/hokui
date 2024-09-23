import { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
type customProps = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    hideSpinButton?: boolean;
};
export interface NumberFieldProps extends AriaNumberFieldProps, customProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function NumberField({ label, description, errorMessage, ...props }: NumberFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
