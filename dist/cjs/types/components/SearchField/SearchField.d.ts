import { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
type CustomProps = {
    color?: Color;
    variant?: InputVariant;
    rounded?: Rounded;
};
export interface SearchFieldProps extends AriaSearchFieldProps, CustomProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function SearchField({ label, description, errorMessage, ...props }: SearchFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
