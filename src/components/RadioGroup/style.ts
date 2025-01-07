import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const RadioBtnStyles = tv({
  extend: focusRing,
  base: "w-5 h-5 max-w-5 max-h-5 min-w-5 min-h-5  rounded-full border-2 bg-white transition-all cursor-pointer",
  variants: {
    isSelected: {
      false:
        "border-[--borderUnselected] group-pressed:border-[--borderUnselectedPressed]",
      true: "border-[7px] border-[--border] forced-colors:!border-[Highlight] group-pressed:border-[--borderPressed]",
    },
    isInvalid: {
      true: "border-red-700 group-pressed:border-red-800 forced-colors:!border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 forced-colors:!border-[GrayText]",
    },
    color: {
      default:
        "[--borderUnselected:hsl(var(--hok-default-300))] [--borderUnselectedPressed:hsl(var(--hok-default-400))] [--border:hsl(var(--hok-default-400))] [--borderPressed:hsl(var(--hok-default-600))]",
      primary:
        "[--borderUnselected:hsl(var(--hok-primary-300))] [--borderUnselectedPressed:hsl(var(--hok-primary-400))] [--border:hsl(var(--hok-primary-400))] [--borderPressed:hsl(var(--hok-primary-600))]",
      secondary:
        "[--borderUnselected:hsl(var(--hok-secondary-400))] [--borderUnselectedPressed:hsl(var(--hok-secondary-500))] [--border:hsl(var(--hok-secondary-500))] [--borderPressed:hsl(var(--hok-secondary-700))]",
      success:
        "[--borderUnselected:hsl(var(--hok-success-400))] [--borderUnselectedPressed:hsl(var(--hok-success-500))] [--border:hsl(var(--hok-success-500))] [--borderPressed:hsl(var(--hok-success-600))]",
      danger:
        "[--borderUnselected:hsl(var(--hok-danger-400))] [--borderUnselectedPressed:hsl(var(--hok-danger-500))] [--border:hsl(var(--hok-danger-500))] [--borderPressed:hsl(var(--hok-danger-600))]",
      warning:
        "[--borderUnselected:hsl(var(--hok-warning-400))] [--borderUnselectedPressed:hsl(var(--hok-warning-500))] [--border:hsl(var(--hok-warning-500))] [--borderPressed:hsl(var(--hok-warning-600))]",
      info: "[--borderUnselected:hsl(var(--hok-info-200))] [--borderUnselectedPressed:hsl(var(--hok-info-400))] [--border:hsl(var(--hok-info-400))] [--borderPressed:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
