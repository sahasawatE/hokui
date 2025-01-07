import React from "react";
import type {
  SelectProps as AriaSelectProps,
  ValidationResult,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

interface customSelectProps<T> {
  rounded?: Rounded;
  color?: Color;
  variant?: InputVariant;
  onSelect?: (value: T) => void;
  onClear?: (defaultKey: string | null) => void;
}

export interface SelectProps<T extends { [k: string]: any; key: string }>
  extends Omit<AriaSelectProps<T>, "children" | "onSelectionChange">,
    customSelectProps<T> {
  label?: string;
  description?: string;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items: Iterable<T>;
  children?: (item: T) => React.ReactNode;
  onSelectionChange?: (key: string | null) => void;
}
