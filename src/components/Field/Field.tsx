import {
  Group,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  type FieldErrorProps as RACFieldErrorProps,
  type GroupProps as RACGroupProps,
  type InputProps as RACInputProps,
  type LabelProps as RACLabelProps,
  type TextProps as RACTextProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
import { motion } from "framer-motion";

type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
};

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        "text-sm text-gray-500 font-medium cursor-default w-fit",
        props.className,
      )}
    />
  );
}

export type TextProps = RACTextProps;

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge("text-sm text-gray-600", props.className)}
    />
  );
}

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "text-sm text-red-600 forced-colors:text-[Mark]",
      )}
    />
  );
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-[--borderColor] forced-colors:border-[--borderColor]",
      true: "border-[--borderColorFocused] forced-colors:border-[--borderColorFocused]",
    },
    isInvalid: {
      true: "border-red-600 forced-colors:border-red-600",
    },
    isDisabled: {
      true: "cursor-not-allowed border-gray-200 forced-colors:border-gray-200",
    },
    variant: {
      bordered: "bg-white border-2",
      underlined: "bg-transparent border-b-2",
      flat: "border-0",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    color: {
      default:
        "[--c:var(--hok-default-200)] [--c1:var(--hok-default-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      primary:
        "[--c:var(--hok-primary-100)] [--c1:var(--hok-primary-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      secondary:
        "[--c:var(--hok-secondary-100)] [--c1:var(--hok-secondary-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      success:
        "[--c:var(--hok-success-300)] [--c1:var(--hok-success-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      danger:
        "[--c:var(--hok-danger-300)] [--c1:var(--hok-danger-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      warning:
        "[--c:var(--hok-warning-300)] [--c1:var(--hok-warning-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
      info: "[--c:var(--hok-info-300)] [--c1:var(--hok-info-500)] [--borderColor:hsl(var(--c))] [--borderColorFocused:hsl(var(--c1))] [--bgColorFlat:hsl(var(--c)/0.6)]",
    },
  },
});

export const fieldElememtStyles = tv({
  base: "group flex items-center h-9 bg-white forced-colors:bg-[Field] overflow-hidden",
  variants: fieldBorderStyles.variants,
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
    color: "default",
  },
  compoundVariants: [
    {
      isInvalid: true,
      variant: "flat",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "bg-red-200",
    },
    {
      isInvalid: false,
      variant: "flat",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "bg-[--bgColorFlat]",
    },
    {
      isInvalid: true,
      rounded: ["full", "lg", "md", "none", "sm", "xl"],
      variant: "underlined",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "rounded-none border-red-300 forced-colors:border-red-300",
    },
    {
      isInvalid: false,
      rounded: ["full", "lg", "md", "none", "sm", "xl"],
      variant: "underlined",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className:
        "rounded-none border-[--borderColor] forced-colors:border-[--borderColor]",
    },
  ],
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group h-9 overflow-hidden",
  variants: fieldBorderStyles.variants,
});

const underlinedStyle = tv({
  base: "absolute w-[0px] h-[2px] rounded-full bottom-0 right-1/2 translate-x-1/2 [--lineColor:hsl(var(--c1))] bg-[--lineColor]",
  variants: {
    color: fieldBorderStyles.variants.color,
  },
  defaultVariants: {
    color: "default",
  },
});

export type FieldGroupProps = RACGroupProps & customProps;

export function FieldGroup(props: FieldGroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          className,
        }),
      )}
    >
      {(e) => (
        <div className="relative">
          <div
            className={fieldElememtStyles({
              ...e,
              color: props.color,
              variant: props.variant,
              rounded: props.rounded,
            })}
          >
            {props.children
              ? typeof props.children === "function"
                ? props.children(e)
                : props.children
              : null}
          </div>
          {/* underlined style */}
          {props.variant === "underlined" && (
            <motion.div
              animate={
                e.isFocusWithin
                  ? {
                      width: "100%",
                      opacity: 1,
                    }
                  : {
                      width: "0",
                      transitionEnd: {
                        opacity: 0,
                      },
                    }
              }
              transition={{
                type: "tween",
                ease: "circInOut",
              }}
              className={underlinedStyle({
                color: props.isInvalid ? "danger" : props.color,
              })}
            ></motion.div>
          )}
        </div>
      )}
    </Group>
  );
}

export type InputProps = RACInputProps;

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "bg-transparent outline-0 px-2 py-1.5 flex-1 min-w-10 text-sm text-default-800 disabled:text-default-400",
      )}
    />
  );
}
