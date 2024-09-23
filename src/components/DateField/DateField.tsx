import React from "react";
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label, fieldGroupStyles } from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomProps = {
  variant?: InputVariant;
  color?: Color;
  rounded?: Rounded;
};

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T>,
    CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <DateInput
        color={props.color}
        variant={props.variant}
        rounded={props.rounded}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

const segmentStyles = tv({
  base: "inline p-0.5 type-literal:px-0 rounded-xs outline outline-0 forced-color-adjust-none caret-transparent text-gray-800 forced-colors:text-[ButtonText]",
  variants: {
    isPlaceholder: {
      true: "text-gray-600 italic",
    },
    isDisabled: {
      true: "text-gray-200 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-[--textColor] text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
    color: {
      default: "[--c:var(--hok-default-400)] [--textColor:hsl(var(--c))]",
      primary: "[--c:var(--hok-primary-400)] [--textColor:hsl(var(--c))]",
      secondary: "[--c:var(--hok-secondary-400)] [--textColor:hsl(var(--c))]",
      success: "[--c:var(--hok-success-400)] [--textColor:hsl(var(--c))]",
      danger: "[--c:var(--hok-danger-400)] [--textColor:hsl(var(--c))]",
      warning: "[--c:var(--hok-warning-400)] [--textColor:hsl(var(--c))]",
      info: "[--c:var(--hok-info-400)] [--textColor:hsl(var(--c))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export function DateInput(
  props: Omit<DateInputProps, "children"> & CustomProps,
) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: "flex min-w-[150px] px-2 py-1.5 text-sm",
          rounded: props.rounded,
          color: props.color,
          variant: props.variant,
        })
      }
      {...props}
    >
      {(segment) => (
        <DateSegment
          segment={segment}
          className={(renderProps) =>
            segmentStyles({
              ...renderProps,
              color: props.color,
            })
          }
        />
      )}
    </AriaDateInput>
  );
}
