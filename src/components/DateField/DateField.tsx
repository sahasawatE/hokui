import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps as AriaDateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { fieldGroupStyles } from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color } from "../types/prop.type";

type CustomProps = {
  color?: Color;
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
      <DateInput color={props.color} />
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
      true: "text-default-400 forced-colors:text-[GrayText]",
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

export interface DateInputProps
  extends Omit<AriaDateInputProps, "children">,
    CustomProps {}

export function DateInput(props: DateInputProps) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: "flex min-w-[150px] px-2 py-1.5 text-sm",
          color: props.color,
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
