import React from "react";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Label } from "../Field";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type CustomProps = {
  color?: Color;
};

const trackStyles = tv({
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

const trackValueStyles = tv({
  base: "absolute h-2 top-[50%] translate-y-[-50%] rounded-full",
  variants: {
    orientation: {
      horizontal: "w-full h-[6px]",
      vertical: "h-full w-[6px] ml-[50%] -translate-x-[50%]",
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

const thumbStyles = tv({
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

export interface SliderProps<T> extends AriaSliderProps<T>, CustomProps {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  return (
    <AriaSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "orientation-horizontal:grid orientation-vertical:flex grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:w-64",
      )}
    >
      <Label>{label}</Label>
      <SliderOutput className="text-sm text-gray-500 font-medium orientation-vertical:hidden">
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput>
      <SliderTrack className="group col-span-2 orientation-horizontal:h-6 orientation-vertical:w-6 orientation-vertical:h-64 flex items-center">
        {({ state, ...renderProps }) => (
          <>
            <div className={trackStyles(renderProps)} />
            <div
              className={trackValueStyles({
                ...renderProps,
                color: props.color,
              })}
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={(renderProps) =>
                  thumbStyles({ ...renderProps, color: props.color })
                }
              />
            ))}
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
