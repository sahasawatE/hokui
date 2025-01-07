import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const itemStyles = tv({
  extend: focusRing,
  base: "group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-[--text] hover:bg-[--bgHover] -outline-offset-2",
      true: "bg-[--bg] text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] [&:has(+[data-selected])]:rounded-b-none [&+[data-selected]]:rounded-t-none -outline-offset-4 outline-white forced-colors:outline-[HighlightText]",
    },
    isDisabled: {
      true: "text-slate-300 forced-colors:text-[GrayText]",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-300))] [--bgHover:hsl(var(--hok-default-200))] [--text:hsl(var(--hok-default-500))]",
      primary:
        "[--bg:hsl(var(--hok-primary-300))] [--bgHover:hsl(var(--hok-primary-100))] [--text:hsl(var(--hok-primary-500))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-300))] [--bgHover:hsl(var(--hok-secondary-100))] [--text:hsl(var(--hok-secondary-500))]",
      success:
        "[--bg:hsl(var(--hok-success-500))] [--bgHover:hsl(var(--hok-success-300))] [--text:hsl(var(--hok-success-600))]",
      warning:
        "[--bg:hsl(var(--hok-warning-500))] [--bgHover:hsl(var(--hok-warning-300))] [--text:hsl(var(--hok-warning-500))]",
      danger:
        "[--bg:hsl(var(--hok-danger-500))] [--bgHover:hsl(var(--hok-danger-300))] [--text:hsl(var(--hok-danger-500))]",
      info: "[--bg:hsl(var(--hok-info-400))] [--bgHover:hsl(var(--hok-info-100))] [--text:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const dropdownItemStyles = tv({
  base: "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded outline outline-0 text-sm forced-color-adjust-none",
  variants: {
    isDisabled: {
      false: "text-gray-900",
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-[--bg] text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
    color: {
      default: "[--bg:hsl(var(--hok-default-300))]",
      primary: "[--bg:hsl(var(--hok-primary-300))]",
      secondary: "[--bg:hsl(var(--hok-secondary-300))]",
      success: "[--bg:hsl(var(--hok-success-500))]",
      warning: "[--bg:hsl(var(--hok-warning-500))]",
      danger: "[--bg:hsl(var(--hok-danger-500))]",
      info: "[--bg:hsl(var(--hok-info-400))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: "bg-gray-100",
    },
  ],
});
