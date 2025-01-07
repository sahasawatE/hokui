import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const TableStyle = tv({
  base: "min-w-[550px] overflow-auto scroll-pt-[2.281rem] relative",
  variants: {
    variant: {
      bordered: "bg-transparent drop-shadow-none",
      flat: "border-0 bg-white drop-shadow-none",
      float: "border-0 bg-white drop-shadow-md",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
  },
});

export const TableContainerStyle = tv({
  base: "border max-w-full overflow-auto",
  variants: {
    rounded: TableStyle.variants.rounded,
    hideScrollbar: {
      true: "no-scrollbar",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

export const TableLoadingOverlayStyle = tv({
  base: "absolute w-full h-full bg-white/75",
  variants: {
    rounded: TableStyle.variants.rounded,
  },
  defaultVariants: {
    rounded: "md",
  },
});

export const columnStyles = tv({
  extend: focusRing,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden",
});

export const ColumnDecoration = tv({
  base: "truncate w-full",
  variants: {
    fontWeight: {
      thin: "font-thin",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    fontColor: {
      default: "text-default-600",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
    },
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },
  defaultVariants: {
    fontWeight: "semibold",
    fontSize: "base",
    fontColor: "default",
    align: "start",
  },
});

export const TableHeaderStyles = tv({
  base: "sticky top-0 z-10 bg-[--c] backdrop-blur-md mix-blend-multiply supports-[-moz-appearance:none]:bg-default-[--c] border-b h-12",
  variants: {
    color: {
      default: "[--c:hsl(var(--hok-default-100))]",
      primary: "[--c:hsl(var(--hok-primary-100))]",
      secondary: "[--c:hsl(var(--hok-secondary-100))]",
      success: "[--c:hsl(var(--hok-success-100))]",
      warning: "[--c:hsl(var(--hok-warning-100))]",
      danger: "[--c:hsl(var(--hok-danger-100))]",
      info: "[--c:hsl(var(--hok-info-100))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const rowStyles = tv({
  extend: focusRing,
  base: "hover:bg-[hsl(var(--c)/0.1)] selected:bg-[hsl(var(--c)/0.2)] selected:hover:bg-[hsl(var(--c)/0.3)]",
  variants: {
    color: {
      default: "[--c:var(--hok-default-500)]",
      primary: "[--c:var(--hok-primary-300)]",
      secondary: "[--c:var(--hok-secondary-600)]",
      success: "[--c:var(--hok-success-500)]",
      danger: "[--c:var(--hok-danger-500)]",
      warning: "[--c:var(--hok-warning-500)]",
      info: "[--c:var(--hok-info-500)]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const cellStyles = tv({
  extend: focusRing,
  base: "border-b group-last/row:border-b-0 [--selected-border:hsl(var(--hok-default-100))] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2",
  variants: {
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
    },
  },
  defaultVariants: {
    align: "start",
  },
});
