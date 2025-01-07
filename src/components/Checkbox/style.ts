import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const checkboxStyles = tv({
  base: "flex gap-2 items-center group text-sm transition",
  variants: {
    isDisabled: {
      false: "text-gray-800",
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
  },
});

export const boxStyles = tv({
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

export const iconStyles =
  "w-4 h-4 text-white group-disabled:text-gray-400 forced-colors:text-[HighlightText]";
