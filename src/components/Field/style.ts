import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

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

export const underlinedStyle = tv({
  base: "absolute w-[0px] h-[2px] rounded-full bottom-0 right-1/2 translate-x-1/2 [--lineColor:hsl(var(--c1))] bg-[--lineColor]",
  variants: {
    color: fieldBorderStyles.variants.color,
  },
  defaultVariants: {
    color: "default",
  },
});
