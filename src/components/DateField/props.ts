import {
  DateFieldProps as AriaDateFieldProps,
  DateInputProps as AriaDateInputProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import type { Color } from "../types/prop.type";

interface CustomProps {
  color?: Color;
}

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T>,
    CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export interface DateInputProps
  extends Omit<AriaDateInputProps, "children">,
    CustomProps {}
