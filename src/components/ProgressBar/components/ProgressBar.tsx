import { ProgressBar as AriaProgressBar } from "react-aria-components";
import { Label } from "../../Field";
import { composeTailwindRenderProps } from "../../utils";
import { progressBarStyles } from "../style";
import type { ProgressBarProps } from "../props";

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-sm text-gray-600">{valueText}</span>
          </div>
          <div className="w-64 h-2 rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent relative overflow-hidden">
            <div
              className={progressBarStyles({
                isIndeterminate,
              })}
              style={{ width: (isIndeterminate ? 40 : percentage) + "%" }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
