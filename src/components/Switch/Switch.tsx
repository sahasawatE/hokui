import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type CustomProps = {
  color?: Color;
};

export interface SwitchProps
  extends Omit<AriaSwitchProps, "children">,
    CustomProps {
  label?: React.ReactNode;
}

const track = tv({
  extend: focusRing,
  base: "flex h-7 w-12 px-px items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent",
  variants: {
    isSelected: {
      false: "bg-gray-300 group-pressed:bg-gray-400",
      true: "bg-[--bgSelected] forced-colors:!bg-[Highlight] group-pressed:bg-[--bgSelectedPressed]",
    },
    isDisabled: {
      true: "bg-gray-200 forced-colors:group-selected:!bg-[GrayText] forced-colors:border-[GrayText] cursor-not-allowed",
      false: "cursor-pointer",
    },
    color: {
      default:
        "[--bgSelected:hsl(var(--hok-default-400))] [--bgSelectedPressed:hsl(var(--hok-default-500))]",
      primary:
        "[--bgSelected:hsl(var(--hok-primary-400))] [--bgSelectedPressed:hsl(var(--hok-primary-500))]",
      secondary:
        "[--bgSelected:hsl(var(--hok-secondary-500))] [--bgSelectedPressed:hsl(var(--hok-secondary-600))]",
      success:
        "[--bgSelected:hsl(var(--hok-success-500))] [--bgSelectedPressed:hsl(var(--hok-success-600))]",
      danger:
        "[--bgSelected:hsl(var(--hok-danger-500))] [--bgSelectedPressed:hsl(var(--hok-danger-600))]",
      warning:
        "[--bgSelected:hsl(var(--hok-warning-500))] [--bgSelectedPressed:hsl(var(--hok-warning-600))]",
      info: "[--bgSelected:hsl(var(--hok-info-500))] [--bgSelectedPressed:hsl(var(--hok-info-600))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const handle = tv({
  base: "h-5 w-5 transform rounded-full bg-white outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out",
  variants: {
    isSelected: {
      false: "translate-x-[2px]",
      true: "translate-x-[110%]",
    },
    isDisabled: {
      true: "forced-colors:outline-[GrayText]",
    },
  },
});

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex gap-2 items-center text-gray-800 disabled:text-gray-300 forced-colors:disabled:text-[GrayText] text-sm transition",
      )}
    >
      {(renderProps) => (
        <>
          <div className={track({ ...renderProps, color: props.color })}>
            <span className={handle(renderProps)} />
          </div>
          {label}
        </>
      )}
    </AriaSwitch>
  );
}
