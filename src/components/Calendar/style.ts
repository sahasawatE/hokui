import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const cellStyles = tv({
  extend: focusRing,
  base: "rounded w-9 h-9 text-sm cursor-default flex items-center justify-center forced-color-adjust-none cursor-pointer",
  variants: {
    isSelected: {
      false: "text-zinc-900 hover:bg-gray-100 pressed:bg-gray-200",
      true: "bg-[--selectedColor] invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
    color: {
      default: "[--selectedColor:hsl(var(--hok-default-400))]",
      primary: "[--selectedColor:hsl(var(--hok-primary-400))]",
      secondary: "[--selectedColor:hsl(var(--hok-secondary-500))]",
      success: "[--selectedColor:hsl(var(--hok-success-500))]",
      danger: "[--selectedColor:hsl(var(--hok-danger-500))]",
      warning: "[--selectedColor:hsl(var(--hok-warning-500))]",
      info: "[--selectedColor:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
