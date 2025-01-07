import type { ReactNode } from "react";
import type {
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomTextFieldProps = {
  color?: Color;
  variant?: InputVariant;
  rounded?: Rounded;
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export interface TextFieldProps
  extends AriaTextFieldProps,
    CustomTextFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
