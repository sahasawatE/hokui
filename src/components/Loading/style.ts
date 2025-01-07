import { tv } from "tailwind-variants";

export const WarperStyles = tv({
  variants: {
    size: {
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const IndicatorStyles = tv({
  base: "stroke-[--c] bg-[--c]",
  variants: {
    color: {
      default: "[--c:hsl(var(--hok-default))]",
      primary: "[--c:hsl(var(--hok-primary))]",
      secondary: "[--c:hsl(var(--hok-secondary))]",
      success: "[--c:hsl(var(--hok-success))]",
      danger: "[--c:hsl(var(--hok-danger))]",
      warning: "[--c:hsl(var(--hok-warning))]",
      info: "[--c:hsl(var(--hok-info))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
