import { Check, Minus } from "lucide-react";
import React, { ReactNode } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "../Field";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color } from "../types/prop.type";

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export interface cbProps extends Omit<CheckboxProps, "children"> {
  children?: ReactNode;
  color?: Color;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2",
      )}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

const checkboxStyles = tv({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

const boxStyles = tv({
  extend: focusRing,
  base: "w-5 h-5 flex-shrink-0 rounded-[.35rem] flex items-center justify-center border-2 transition cursor-pointer",
  variants: {
    isSelected: {
      false:
        "bg-white border-[--color] [--color:--colorSelectFalse] group-pressed:text-default",
      true: "bg-[--color] border-[--color] [--color:--colorSelectTrue] group-pressed:[--color:--colorSelectPressed] forced-colors:![--color:Highlight]",
    },
    isInvalid: {
      true: "[--color:theme(colors.red.700)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)]",
    },
    isDisabled: {
      true: "[--color:theme(colors.gray.200)] forced-colors:![--color:GrayText]",
    },
    color: {
      default: [
        "[--colorSelectFalse:hsl(var(--hok-default-200))]",
        "[--colorSelectTrue:hsl(var(--hok-default-600))]",
        "[--colorSelectPressed:hsl(var(--hok-default-700))]",
      ],
      primary: [
        "[--colorSelectFalse:hsl(var(--hok-primary-200))]",
        "[--colorSelectTrue:hsl(var(--hok-primary-300))]",
        "[--colorSelectPressed:hsl(var(--hok-primary-400))]",
      ],
      secondary: [
        "[--colorSelectFalse:hsl(var(--hok-secondary-200))]",
        "[--colorSelectTrue:hsl(var(--hok-secondary-700))]",
        "[--colorSelectPressed:hsl(var(--hok-secondary-800))]",
      ],
      success: [
        "[--colorSelectFalse:hsl(var(--hok-success-400))]",
        "[--colorSelectTrue:hsl(var(--hok-success-500))]",
        "[--colorSelectPressed:hsl(var(--hok-success-600))]",
      ],
      danger: [
        "[--colorSelectFalse:hsl(var(--hok-danger-400))]",
        "[--colorSelectTrue:hsl(var(--hok-danger-500))]",
        "[--colorSelectPressed:hsl(var(--hok-danger-600))]",
      ],
      warning: [
        "[--colorSelectFalse:hsl(var(--hok-warning-400))]",
        "[--colorSelectTrue:hsl(var(--hok-warning-500))]",
        "[--colorSelectPressed:hsl(var(--hok-warning-600))]",
      ],
      info: [
        "[--colorSelectFalse:hsl(var(--hok-info-400))]",
        "[--colorSelectTrue:hsl(var(--hok-info-500))]",
        "[--colorSelectPressed:hsl(var(--hok-info-600))]",
      ],
    },
    isHovered: {
      true: "scale-105",
    },
    isPressed: {
      true: "scale-95",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const iconStyles =
  "w-4 h-4 text-white group-disabled:text-gray-400 forced-colors:text-[HighlightText]";

export function Checkbox(props: cbProps) {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className }),
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              color: props.color,
              ...renderProps,
            })}
          >
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  );
}
