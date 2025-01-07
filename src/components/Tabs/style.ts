import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const tabStyles = tv({
  base: "absolute inset-0",
  variants: {
    color: {
      default:
        "[--bgHover:hsl(var(--hok-default-200))] [--bg:hsl(var(--hok-default-500))] [--textDisabled:hsl(var(--hok-default-300))]",
      primary:
        "[--bgHover:hsl(var(--hok-primary-200))] [--bg:hsl(var(--hok-primary-500))] [--textDisabled:hsl(var(--hok-primary-300))]",
      secondary:
        "[--bgHover:hsl(var(--hok-secondary-200))] [--bg:hsl(var(--hok-secondary-500))] [--textDisabled:hsl(var(--hok-secondary-300))]",
      success:
        "[--bgHover:hsl(var(--hok-success-200))] [--bg:hsl(var(--hok-success-500))] [--textDisabled:hsl(var(--hok-success-300))]",
      danger:
        "[--bgHover:hsl(var(--hok-danger-200))] [--bg:hsl(var(--hok-danger-500))] [--textDisabled:hsl(var(--hok-danger-300))]",
      warning:
        "[--bgHover:hsl(var(--hok-warning-200))] [--bg:hsl(var(--hok-warning-500))] [--textDisabled:hsl(var(--hok-warning-300))]",
      info: "[--bgHover:hsl(var(--hok-info-200))] [--bg:hsl(var(--hok-info-500))] [--textDisabled:hsl(var(--hok-info-300))]",
    },
    variant: {
      default: "rounded-sm mix-blend-multiply bg-[--bg] shadow",
      flat: "rounded-sm mix-blend-multiply bg-[--bg]",
      underlined: "border-b-2 border-[--bg]",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
});

export const tabTextStyles = tv({
  base: "relative",
  variants: {
    isSelected: {
      true: "",
      false: "text-[--textColor]",
    },
    color: {
      default: "[--textColor:hsl(var(--hok-default-600))]",
      primary: "[--textColor:hsl(var(--hok-primary-600))]",
      secondary: "[--textColor:hsl(var(--hok-secondary-600))]",
      success: "[--textColor:hsl(var(--hok-success-600))]",
      danger: "[--textColor:hsl(var(--hok-danger-600))]",
      warning: "[--textColor:hsl(var(--hok-warning-600))]",
      info: "[--textColor:hsl(var(--hok-info-600))]",
    },
    variant: {
      default: "",
      flat: "",
      underlined: "",
    },
  },
  defaultVariants: {
    color: "default",
    variant: "default",
  },
  compoundVariants: [
    {
      variant: ["default", "flat"],
      isSelected: true,
      className: "text-white",
    },
    {
      variant: "underlined",
      isSelected: true,
      className: "text-[--textColor]",
    },
  ],
});

export const tabListStyles = tv({
  base: "flex gap-1 p-1 rounded",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
    variant: {
      default: "bg-gray-200",
      flat: "bg-transparent border-2",
      underlined: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const tabBaseStyles = tv({
  extend: focusRing,
  base: "rounded-sm transition forced-color-adjust-none flex items-center cursor-pointer px-4 py-1.5 text-sm font-medium",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed",
    },
    color: {
      default: "[--bgHover:hsl(var(--hok-default-200))]",
      primary: "[--bgHover:hsl(var(--hok-primary-200))]",
      secondary: "[--bgHover:hsl(var(--hok-secondary-200))]",
      success: "[--bgHover:hsl(var(--hok-success-200))]",
      danger: "[--bgHover:hsl(var(--hok-danger-200))]",
      warning: "[--bgHover:hsl(var(--hok-warning-200))]",
      info: "[--bgHover:hsl(var(--hok-info-200))]",
    },
    variant: {
      default: "",
      flat: "",
      underlined: "",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
  compoundVariants: [
    {
      isDisabled: true,
      isSelected: false,
      variant: ["default", "flat"],
      className: "text-gray-300",
    },
    {
      isDisabled: true,
      isSelected: true,
      variant: "default",
      className: "bg-gray-100 text-gray-300",
    },
    {
      isDisabled: true,
      isSelected: true,
      variant: "flat",
      className: "bg-[--bgHover] text-white",
    },
    {
      isDisabled: true,
      variant: "underlined",
      className: "text-gray-300",
    },
  ],
});

export const tabPanelStyles = tv({
  extend: focusRing,
  base: "flex-1 p-4 text-sm text-gray-900",
});

export const tabsStyles = tv({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]",
    },
  },
});
