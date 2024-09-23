import React from "react";
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

import type { Color, ButtonVariant, Rounded, Size } from "../types/prop.type";

export interface ButtonProps extends RACButtonProps {
  variant?: ButtonVariant;
  color?: Color;
  rounded?: Rounded;
  isLoading?: boolean;
  size?: Size;
}

let button = tv({
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
      true: "bg-gray-100 text-gray-300 border-black/5 cursor-not-allowed",
    },
    size: {
      sm: "[--btnPx:0.5rem] h-6 min-w-6 text-sm",
      md: "[--btnPx:0.75rem] h-8 min-w-8 text-md",
      lg: "[--btnPx:1rem] h-10 min-w-10 text-lg",
      xl: "[--btnPx:1.25rem] h-12 min-w-12 text-xl",
    },
    isHovered: {
      true: "scale-105",
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
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      isDisabled={props.isDisabled || props.isLoading}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({
          ...renderProps,
          variant: props.variant,
          color: props.color,
          rounded: props.rounded,
          size: props.size,
          className,
        }),
      )}
    >
      {props.isLoading ? (
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-300 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      ) : (
        props.children
      )}
    </RACButton>
  );
}
