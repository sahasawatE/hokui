import React from "react";
import {
  ComboBoxProps as AriaComboBoxProps,
  ValidationResult,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

export interface ComboBoxProps<
  T extends { [k: string]: any; key: string; title: string },
> extends Omit<AriaComboBoxProps<T>, "children" | "onSelectionChange"> {
  label?: string;
  placeholder?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  color?: Color;
  rounded?: Rounded;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
  variant?: InputVariant;
  startContent?: React.ReactNode;
  children?: (item: T) => React.ReactNode;
  onSelectionChange?: (key: string | null) => void;
  onSelect?: (value: T) => void;
  onClear?: (defaultKey: string | null) => void;
}
