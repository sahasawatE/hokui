import { TextFieldProps as AriaTextFieldProps, ValidationResult } from "react-aria-components";
export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TextField({ label, description, errorMessage, ...props }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
