import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const StepIndicatorStyles = tv({
  extend: focusRing,
  base: "select-none flex flex-row items-center pointer-events-none transition-all",
  variants: {
    isSelected: {
      true: "text-[--c]",
      false: "text-black",
    },
    color: {
      default:
        "[--c:hsl(var(--hok-default))] [--c2:hsl(var(--hok-default-300))]",
      primary:
        "[--c:hsl(var(--hok-primary))] [--c2:hsl(var(--hok-primary-300))]",
      secondary:
        "[--c:hsl(var(--hok-secondary))] [--c2:hsl(var(--hok-secondary-300))]",
      success:
        "[--c:hsl(var(--hok-success))] [--c2:hsl(var(--hok-success-300))]",
      danger: "[--c:hsl(var(--hok-danger))] [--c2:hsl(var(--hok-danger-300))]",
      warning:
        "[--c:hsl(var(--hok-warning))] [--c2:hsl(var(--hok-warning-300))]",
      info: "[--c:hsl(var(--hok-info))] [--c2:hsl(var(--hok-info-300))]",
    },
  },
  defaultVariants: {
    isSelected: false,
    color: "default",
  },
});

export const StepIndicatorStepStyles = tv({
  base: "h-8 w-8 flex flex-row justify-center items-center rounded-sm",
  variants: {
    color: StepIndicatorStyles.variants.color,
    selected: {
      true: "text-white border-none bg-[--c]",
      false: "border-2",
    },
  },
  defaultVariants: {
    color: "default",
    selected: false,
  },
});

export const StepIndicatorDotStyles = tv({
  base: "h-4 w-4 rounded-full lg:hidden border-none",
  variants: {
    color: StepIndicatorStyles.variants.color,
    isPassed: {
      true: "bg-[--c2]",
      false: "bg-gray-300",
    },
    isSelected: {
      true: "bg-[--c]",
      false: "",
    },
  },
  defaultVariants: {
    color: "default",
    isPassed: false,
    isSelected: false,
  },
});
