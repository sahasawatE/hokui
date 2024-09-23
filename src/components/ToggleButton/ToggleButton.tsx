import React from "react";
import {
  ToggleButton as RACToggleButton,
  ToggleButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import type { ButtonVariant, Color, Rounded, Size } from "../types/prop.type";

type CustomProps = {
  color?: Color;
  variant?: Exclude<ButtonVariant, "default">;
  rounded?: Rounded;
  size?: Size;
};

let styles = tv({
  extend: focusRing,
  base: "px-[--btnPx] pressed:bg-[--bgColor] flex flex-row justify-center items-center py-2 text-center transition shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] cursor-pointer forced-color-adjust-none",
  variants: {
    isDisabled: {
      true: "bg-gray-100 forced-colors:!bg-[ButtonFace] text-gray-300 forced-colors:!text-[GrayText] border-black/5 forced-colors:border-[GrayText] cursor-not-allowed",
    },
    isSelected: {
      true: "text-white bg-[--borderColor] hover:bg-[--bgDefaultHover] forced-colors:!bg-[Highlight] forced-colors:!text-[HighlightText]",
      false:
        "text-[--textColor] hover:bg-[--bgFlatHover] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText]",
    },
    color: {
      default: [
        "[--bgDefaultHover:hsl(var(--hok-default-400))]",
        "[--bgFlat:hsl(var(--hok-default-200))]",
        "[--bgIcon:hsl(var(--hok-default-200)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-default-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-default-500))]",
        "[--bgColorHover:hsl(var(--hok-default-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-default-500))]",
        "[--textColor:hsl(var(--hok-default-500))]",
      ],
      primary: [
        "[--bgDefaultHover:hsl(var(--hok-primary-400))]",
        "[--bgFlat:hsl(var(--hok-primary-200))]",
        "[--bgIcon:hsl(var(--hok-primary-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-primary-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-primary-500))]",
        "[--bgColorHover:hsl(var(--hok-primary-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-primary-500))]",
        "[--textColor:hsl(var(--hok-primary-500))]",
      ],
      secondary: [
        "[--bgDefaultHover:hsl(var(--hok-secondary-400))]",
        "[--bgFlat:hsl(var(--hok-secondary-200))]",
        "[--bgIcon:hsl(var(--hok-secondary-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-secondary-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-secondary-500))]",
        "[--bgColorHover:hsl(var(--hok-secondary-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-secondary-500))]",
        "[--textColor:hsl(var(--hok-secondary-500))]",
      ],
      success: [
        "[--bgDefaultHover:hsl(var(--hok-success-400))]",
        "[--bgFlat:hsl(var(--hok-success-200))]",
        "[--bgIcon:hsl(var(--hok-success-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-success-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-success-500))]",
        "[--bgColorHover:hsl(var(--hok-success-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-success-500))]",
        "[--textColor:hsl(var(--hok-success-500))]",
      ],
      danger: [
        "[--bgDefaultHover:hsl(var(--hok-danger-400))]",
        "[--bgFlat:hsl(var(--hok-danger-200))]",
        "[--bgIcon:hsl(var(--hok-danger-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-danger-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-danger-500))]",
        "[--bgColorHover:hsl(var(--hok-danger-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-danger-500))]",
        "[--textColor:hsl(var(--hok-danger-500))]",
      ],
      warning: [
        "[--bgDefaultHover:hsl(var(--hok-warning-400))]",
        "[--bgFlat:hsl(var(--hok-warning-200))]",
        "[--bgIcon:hsl(var(--hok-warning-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-warning-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-warning-500))]",
        "[--bgColorHover:hsl(var(--hok-warning-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-warning-500))]",
        "[--textColor:hsl(var(--hok-warning-500))]",
      ],
      info: [
        "[--bgDefaultHover:hsl(var(--hok-info-400))]",
        "[--bgFlat:hsl(var(--hok-info-200))]",
        "[--bgIcon:hsl(var(--hok-info-100)/0.7)]",
        "[--bgFlatHover:hsl(var(--hok-info-200)/0.6)]",
        "[--bgColor:hsl(var(--hok-info-500))]",
        "[--bgColorHover:hsl(var(--hok-info-500)/0.9)]",
        "[--borderColor:hsl(var(--hok-info-500))]",
        "[--textColor:hsl(var(--hok-info-500))]",
      ],
    },
    variant: {
      bordered: "border-2",
      flat: "border-0",
      text: "border-0",
      icon: "![--btnPx:0] border-0",
    },
    size: {
      xs: "[--btnPx:0.75rem] h-6 min-w-6 text-xs",
      sm: "[--btnPx:1rem] h-8 min-w-8 text-sm",
      md: "[--btnPx:1.25rem] h-10 min-w-10 text-md",
      lg: "[--btnPx:1.5rem] h-12 min-w-12 text-lg",
      xl: "[--btnPx:1.75rem] h-14 min-w-14 text-xl",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "default",
    variant: "bordered",
    rounded: "md",
    size: "md",
  },
  compoundVariants: [
    {
      isSelected: false,
      variant: "bordered",
      className: "bg-transparent border-[--borderColor]",
    },
    {
      isSelected: false,
      variant: "flat",
      className: "bg-[--bgFlat]",
    },
    {
      isSelected: false,
      variant: "icon",
      className: "bg-[--bgIcon]",
    },
    {
      isSelected: false,
      variant: "text",
      className: "bg-transparent",
    },
  ],
});

export function ToggleButton(props: ToggleButtonProps & CustomProps) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({
          ...renderProps,
          className,
          color: props.color,
          variant: props.variant,
          rounded: props.rounded,
          size: props.size,
        }),
      )}
    />
  );
}
