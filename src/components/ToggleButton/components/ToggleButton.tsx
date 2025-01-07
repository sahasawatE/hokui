import {
  ToggleButton as RACToggleButton,
  composeRenderProps,
} from "react-aria-components";
import { toggleButtonStyles } from "../style";
import type { ToggleButtonProp } from "../props";

export function ToggleButton(props: ToggleButtonProp) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        toggleButtonStyles({
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
