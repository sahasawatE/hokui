import type {
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult,
} from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";

interface customNumberFieldProps {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
  hideSpinButton?: boolean;
}

export interface NumberFieldProps
  extends AriaNumberFieldProps,
    customNumberFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
