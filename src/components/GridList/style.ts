import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const itemStyles = tv({
  extend: focusRing,
  base: "relative flex gap-3 cursor-default select-none py-2 px-3 text-sm text-gray-900 border-y border-transparent first:border-t-0 last:border-b-0 first:rounded-t-md last:rounded-b-md -mb-px last:mb-0 -outline-offset-2 transition-colors",
  variants: {
    isSelected: {
      false: "hover:bg-[--bgUnselectedHover]",
      true: "bg-[--bg] hover:bg-[--bgHover] border-y-[--bgHover] z-20",
    },
    isDisabled: {
      true: "text-slate-300 forced-colors:text-[GrayText] z-10",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-200))] [--bgHover:hsl(var(--hok-default-300))] [--bgUnselectedHover:hsl(var(--hok-default-100))]",
      primary:
        "[--bg:hsl(var(--hok-primary-100))] [--bgHover:hsl(var(--hok-primary-200))] [--bgUnselectedHover:hsl(var(--hok-primary-50))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-200))] [--bgHover:hsl(var(--hok-secondary-300))] [--bgUnselectedHover:hsl(var(--hok-secondary-100))]",
      success:
        "[--bg:hsl(var(--hok-success-300))] [--bgHover:hsl(var(--hok-success-400))] [--bgUnselectedHover:hsl(var(--hok-success-200))]",
      danger:
        "[--bg:hsl(var(--hok-danger-300))] [--bgHover:hsl(var(--hok-danger-400))] [--bgUnselectedHover:hsl(var(--hok-danger-200))]",
      warning:
        "[--bg:hsl(var(--hok-warning-300))] [--bgHover:hsl(var(--hok-warning-400))] [--bgUnselectedHover:hsl(var(--hok-warning-200))]",
      info: "[--bg:hsl(var(--hok-info-200))] [--bgHover:hsl(var(--hok-info-300))] [--bgUnselectedHover:hsl(var(--hok-info-100))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
