import {
  FieldErrorProps,
  Group,
  GroupProps,
  InputProps,
  LabelProps,
  FieldError as RACFieldError,
  Input as RACInput,
  Label as RACLabel,
  Text,
  TextProps,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
import { motion } from "framer-motion";

type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
};

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        "text-sm text-gray-500 font-medium cursor-default w-fit",
        props.className,
      )}
    />
  );
}

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge("text-sm text-gray-600", props.className)}
    />
  );
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "text-sm text-red-600 forced-colors:text-[Mark]",
      )}
    />
  );
}

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-[--borderColor] forced-colors:border-[ButtonBorder]",
      true: "border-[--borderColor] forced-colors:border-[Highlight]",
    },
    isInvalid: {
      true: "border-red-600 forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 forced-colors:border-[GrayText]",
    },
    variant: {
      bordered: "bg-white border-2",
      underlined: "bg-transparent border-b-2",
      flat: "bg-[--bgColorFlat] border-0",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    color: {
      default:
        "[--c:var(--hok-default-200)] [--c1:var(--hok-default-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      primary:
        "[--c:var(--hok-primary-100)] [--c1:var(--hok-primary-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      secondary:
        "[--c:var(--hok-secondary-100)] [--c1:var(--hok-secondary-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      success:
        "[--c:var(--hok-success-300)] [--c1:var(--hok-success-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      danger:
        "[--c:var(--hok-danger-300)] [--c1:var(--hok-danger-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      warning:
        "[--c:var(--hok-warning-300)] [--c1:var(--hok-warning-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
      info: "[--c:var(--hok-info-300)] [--c1:var(--hok-info-500)] [--borderColor:hsl(var(--c))] [--bgColorFlat:hsl(var(--c)/0.8)]",
    },
  },
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
    color: "default",
  },
});

export const fieldElememtStyles = tv({
  base: "group flex items-center h-9 bg-white forced-colors:bg-[Field] overflow-hidden",
  variants: fieldBorderStyles.variants,
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
    color: "default",
  },
  compoundVariants: [
    {
      variant: "underlined",
      rounded: ["full", "lg", "md", "none", "sm", "xl"],
      className: "rounded-none",
    },
  ],
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group h-9 overflow-hidden",
});

const underlinedStyle = tv({
  base: "absolute w-[0px] h-[2px] rounded-full bottom-0 right-1/2 translate-x-1/2 [--lineColor:hsl(var(--c1))] bg-[--lineColor]",
  variants: {
    color: fieldBorderStyles.variants.color,
  },
  defaultVariants: {
    color: "default",
  },
});

export function FieldGroup(props: GroupProps & customProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          className,
        }),
      )}
    >
      {(e) => (
        <div className="relative">
          <div
            className={fieldElememtStyles({
              ...e,
              color: props.color,
              variant: props.variant,
              rounded: props.rounded,
            })}
          >
            {props.children
              ? typeof props.children === "function"
                ? props.children(e)
                : props.children
              : null}
          </div>
          {/* underlined style */}
          {props.variant === "underlined" && (
            <motion.div
              animate={
                e.isFocusWithin
                  ? {
                      width: "100%",
                      opacity: 1,
                    }
                  : {
                      width: "0",
                      transitionEnd: {
                        opacity: 0,
                      },
                    }
              }
              transition={{
                type: "tween",
                ease: "circInOut",
              }}
              className={underlinedStyle({ color: props.color })}
            ></motion.div>
          )}
        </div>
      )}
    </Group>
  );
}

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "bg-transparent outline-0 px-2 py-1.5 flex-1 min-w-0s text-sm text-gray-800 disabled:text-gray-200",
      )}
    />
  );
}
