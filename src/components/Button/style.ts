import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const buttonStyle = tv({
  extend: focusRing,
  base: "px-[--btnPx] flex flex-row justify-center items-center text-center border border-black/10 cursor-pointer overflow-hidden transition",
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    color: {
      default: [
        "[--bgDefaultHover:hsl(var(--hok-default-400))]",
        "[--bgFlat:hsl(var(--hok-default-200))]",
        "[--bgColor:hsl(var(--hok-default-500))]",
        "[--bgColorHover:hsl(var(--hok-default-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-default-500))]",
        "[--textColor:hsl(var(--hok-default-500))]",
      ],
      primary: [
        "[--bgDefaultHover:hsl(var(--hok-primary-400))]",
        "[--bgFlat:hsl(var(--hok-primary-200))]",
        "[--bgColor:hsl(var(--hok-primary-500))]",
        "[--bgColorHover:hsl(var(--hok-primary-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-primary-500))]",
        "[--textColor:hsl(var(--hok-primary-500))]",
      ],
      secondary: [
        "[--bgDefaultHover:hsl(var(--hok-secondary-400))]",
        "[--bgFlat:hsl(var(--hok-secondary-200))]",
        "[--bgColor:hsl(var(--hok-secondary-500))]",
        "[--bgColorHover:hsl(var(--hok-secondary-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-secondary-500))]",
        "[--textColor:hsl(var(--hok-secondary-500))]",
      ],
      success: [
        "[--bgDefaultHover:hsl(var(--hok-success-400))]",
        "[--bgFlat:hsl(var(--hok-success-200))]",
        "[--bgColor:hsl(var(--hok-success-500))]",
        "[--bgColorHover:hsl(var(--hok-success-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-success-500))]",
        "[--textColor:hsl(var(--hok-success-500))]",
      ],
      danger: [
        "[--bgDefaultHover:hsl(var(--hok-danger-400))]",
        "[--bgFlat:hsl(var(--hok-danger-200))]",
        "[--bgColor:hsl(var(--hok-danger-500))]",
        "[--bgColorHover:hsl(var(--hok-danger-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-danger-500))]",
        "[--textColor:hsl(var(--hok-danger-500))]",
      ],
      warning: [
        "[--bgDefaultHover:hsl(var(--hok-warning-400))]",
        "[--bgFlat:hsl(var(--hok-warning-200))]",
        "[--bgColor:hsl(var(--hok-warning-500))]",
        "[--bgColorHover:hsl(var(--hok-warning-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-warning-500))]",
        "[--textColor:hsl(var(--hok-warning-500))]",
      ],
      info: [
        "[--bgDefaultHover:hsl(var(--hok-info-400))]",
        "[--bgFlat:hsl(var(--hok-info-200))]",
        "[--bgColor:hsl(var(--hok-info-500))]",
        "[--bgColorHover:hsl(var(--hok-info-500)/0.3)]",
        "[--borderColor:hsl(var(--hok-info-500))]",
        "[--textColor:hsl(var(--hok-info-500))]",
      ],
    },
    variant: {
      default: "bg-[--bgColor] border-0 text-white hover:bg-[--bgDefaultHover]",
      bordered:
        "bg-transparent border-[--borderColor] border-2 text-[--textColor] hover:bg-[--bgColorHover]",
      flat: "border-0 bg-[--bgFlat] text-[--textColor] hover:bg-[--bgColorHover]",
      text: "border-0 bg-transparent text-[--textColor] hover:bg-[--bgColorHover]",
      icon: "![--btnPx:0] border-0 text-[--textColor] hover:bg-[--bgColorHover]",
    },
    isDisabled: {
      true: "bg-[--bgFlat] text-gray-400 border-black/5 cursor-not-allowed",
    },
    isLoading: {
      true: "",
    },
    size: {
      sm: "[--btnPx:0.5rem] h-6 min-w-6 text-sm",
      md: "[--btnPx:0.75rem] h-8 min-w-8 text-md",
      lg: "[--btnPx:1rem] h-10 min-w-10 text-lg",
      xl: "[--btnPx:1.25rem] h-12 min-w-12 text-xl",
    },
    isPressed: {
      true: "scale-95",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
    rounded: "md",
    size: "md",
  },
  compoundVariants: [
    {
      isDisabled: true,
      isLoading: true,
      className: "bg-[--bgFlat] border-black/5 cursor-wait",
    },
  ],
});
