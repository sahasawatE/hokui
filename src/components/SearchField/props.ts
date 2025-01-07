import type {
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

interface CustomSearchFieldProps {
  color?: Color;
  variant?: InputVariant;
  rounded?: Rounded;
}

export interface SearchFieldProps
  extends AriaSearchFieldProps,
    CustomSearchFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
