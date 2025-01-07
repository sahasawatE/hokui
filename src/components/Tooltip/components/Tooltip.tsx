import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  OverlayArrow,
  composeRenderProps,
  Button,
} from "react-aria-components";
import { defaultActivatorStyles, tooltipStyles } from "../style";
import type { TooltipProps } from "../props";

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <AriaTooltipTrigger delay={props.delay}>
      <Button className={defaultActivatorStyles()}>{props.activator}</Button>
      <AriaTooltip
        {...props}
        offset={10}
        className={composeRenderProps(
          props.className,
          (className, renderProps) =>
            tooltipStyles({ ...renderProps, className }),
        )}
      >
        <OverlayArrow>
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            className="fill-slate-700 forced-colors:fill-[Canvas] stroke-gray-800 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {children}
      </AriaTooltip>
    </AriaTooltipTrigger>
  );
}
