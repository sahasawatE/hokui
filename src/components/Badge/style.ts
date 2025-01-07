import { tv } from "tailwind-variants";

export const badgeStyle = tv({
  base: "absolute px-[6px] text-sm text-[--text]",
  variants: {
    position: {
      "top-right": "top-[calc(var(--yPosition)*-1)] right-0 translate-x-1/2",
      "top-left": "top-[calc(var(--yPosition)_*_-1)] left-0 -translate-x-1/2",
      "bottom-left":
        "bottom-[calc(var(--yPosition)*-1)] right-0 translate-x-1/2",
      "bottom-right":
        "bottom-[calc(var(--yPosition)*-1)] left-0 -translate-x-1/2",
    },
    variant: {
      default: "[--yPosition:1rem] bg-[--bgColor] border-white border-2",
      bordered: "[--yPosition:1rem] bg-white border-[--borderColor] border-2",
      flat: "[--yPosition:0.75rem] bg-[--bgColor] border-0",
    },
    rounded: {
      default: "rounded-sm",
      full: "rounded-full",
    },
    color: {
      default:
        "[--bgColor:hsl(var(--hok-default-200))] [--borderColor:hsl(var(--hok-default-300))] [--text:hsl(var(--hok-default-500))]",
      primary:
        "[--bgColor:hsl(var(--hok-primary-100))] [--borderColor:hsl(var(--hok-primary-200))] [--text:hsl(var(--hok-primary-500))]",
      secondary:
        "[--bgColor:hsl(var(--hok-secondary-100))] [--borderColor:hsl(var(--hok-secondary-200))] [--text:hsl(var(--hok-secondary-500))]",
      success:
        "[--bgColor:hsl(var(--hok-success-100))] [--borderColor:hsl(var(--hok-success-200))] [--text:hsl(var(--hok-success-500))]",
      danger:
        "[--bgColor:hsl(var(--hok-danger-100))] [--borderColor:hsl(var(--hok-danger-200))] [--text:hsl(var(--hok-danger-500))]",
      warning:
        "[--bgColor:hsl(var(--hok-warning-100))] [--borderColor:hsl(var(--hok-warning-200))] [--text:hsl(var(--hok-warning-500))]",
      info: "[--bgColor:hsl(var(--hok-info-100))] [--borderColor:hsl(var(--hok-info-200))] [--text:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    position: "top-right",
    variant: "default",
    rounded: "default",
    color: "default",
  },
});
