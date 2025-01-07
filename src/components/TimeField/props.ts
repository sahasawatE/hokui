import React from "react";
import type {
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomProps = {
  variant?: InputVariant;
  color?: Color;
  rounded?: Rounded;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export interface TimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T>,
    CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
