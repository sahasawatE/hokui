import { tv } from "tailwind-variants";

export const segmentStyles = tv({
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
