import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const trackStyles = tv({
  base: "rounded-full",
  variants: {
    orientation: {
      horizontal: "w-full h-[6px]",
      vertical: "h-full w-[6px] ml-[50%] -translate-x-[50%]",
    },
    isDisabled: {
      false: "bg-gray-300 forced-colors:bg-[ButtonBorder]",
      true: "bg-gray-200 forced-colors:bg-[GrayText]",
    },
  },
});

export const trackValueStyles = tv({
  base: "absolute h-2 rounded-full",
  variants: {
    orientation: {
      horizontal: "w-full h-[6px] top-[50%] translate-y-[-50%]",
      vertical: "h-full w-[6px] bottom-0 ml-[50%] -translate-x-[50%] align-end",
    },
    isDisabled: {
      false: "bg-[--bg] forced-colors:bg-[ButtonBorder]",
      true: "bg-[--bgDisabled] forced-colors:bg-[GrayText]",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-500))] [--bgDisabled:hsl(var(--hok-default-300))]",
      primary:
        "[--bg:hsl(var(--hok-primary-400))] [--bgDisabled:hsl(var(--hok-primary-100))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-500))] [--bgDisabled:hsl(var(--hok-secondary-100))]",
      success:
        "[--bg:hsl(var(--hok-success-500))] [--bgDisabled:hsl(var(--hok-success-400))]",
      danger:
        "[--bg:hsl(var(--hok-danger-500))] [--bgDisabled:hsl(var(--hok-danger-400))]",
      warning:
        "[--bg:hsl(var(--hok-warning-500))] [--bgDisabled:hsl(var(--hok-warning-400))]",
      info: "[--bg:hsl(var(--hok-info-400))] [--bgDisabled:hsl(var(--hok-info-200))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export const thumbStyles = tv({
  extend: focusRing,
  base: "border-[--bg] bg-gray-50 w-6 h-6 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3 rounded-full border-2 transition-colors",
  variants: {
    isDragging: {
      true: "bg-[--bg] forced-colors:bg-[ButtonBorder]",
    },
    isDisabled: {
      true: "border-[--borderDisabled] forced-colors:border-[GrayText] cursor-not-allowed",
      false: "cursor-pointer",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-500))] [--borderDisabled:hsl(var(--hok-default-300))]",
      primary:
        "[--bg:hsl(var(--hok-primary-400))] [--borderDisabled:hsl(var(--hok-primary-100))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-500))] [--borderDisabled:hsl(var(--hok-secondary-100))]",
      success:
        "[--bg:hsl(var(--hok-success-500))] [--borderDisabled:hsl(var(--hok-success-400))]",
      danger:
        "[--bg:hsl(var(--hok-danger-500))] [--borderDisabled:hsl(var(--hok-danger-400))]",
      warning:
        "[--bg:hsl(var(--hok-warning-500))] [--borderDisabled:hsl(var(--hok-warning-400))]",
      info: "[--bg:hsl(var(--hok-info-400))] [--borderDisabled:hsl(var(--hok-info-200))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});
