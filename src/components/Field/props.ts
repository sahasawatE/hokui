import {
  type FieldErrorProps as RACFieldErrorProps,
  type GroupProps as RACGroupProps,
  type InputProps as RACInputProps,
  type LabelProps as RACLabelProps,
  type TextProps as RACTextProps,
} from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";

export type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
};

export type LabelProps = RACLabelProps;

export type TextProps = RACTextProps;

export type FieldErrorProps = RACFieldErrorProps;

export type FieldGroupProps = RACGroupProps & customProps;

export type InputProps = RACInputProps;
