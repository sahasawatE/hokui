import { tv } from "tailwind-variants";

export const DropFileStyles = tv({
  base: "border-2 transition-all p-2",
  variants: {
    isDisabled: {
      true: "!border-default-200 !bg-default-100 pointer-event-none",
    },
    isInvalid: {
      true: "!border-danger-300 !bg-danger-100",
    },
    isDropEnter: {
      false: "border-dashed",
    },
    color: {
      default: "border-default",
      primary: "border-primary",
      secondary: "border-secondary",
      success: "border-success",
      danger: "border-danger",
      warning: "border-warning",
      info: "border-info",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "default",
    rounded: "md",
  },
});

export const FileStyles = tv({
  base: "p-2 flex flex-row items-center justify-between gap-2",
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-none",
      md: "rounded-sm",
      lg: "rounded",
      xl: "rounded-lg",
      full: "rounded-full",
    },
    color: {
      default: "bg-default-200",
      primary: "bg-primary-200",
      secondary: "bg-secondary-200",
      success: "bg-success-200",
      danger: "bg-danger-200",
      warning: "bg-warning-200",
      info: "bg-info-200",
    },
  },
  defaultVariants: {
    rounded: "md",
    color: "default",
  },
});
