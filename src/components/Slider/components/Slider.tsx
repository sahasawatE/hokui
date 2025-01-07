import {
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { Label } from "../../Field";
import { composeTailwindRenderProps } from "../../utils";
import { thumbStyles, trackStyles, trackValueStyles } from "../style";
import type { SliderProps } from "../props";

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
              style={
                props.orientation === "horizontal" || !props.orientation
                  ? { width: state.getThumbPercent(0) * 100 + "%" }
                  : { height: state.getThumbPercent(0) * 100 + "%" }
              }
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
