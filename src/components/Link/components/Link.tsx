import { Link as AriaLink, composeRenderProps } from "react-aria-components";
import { linkStyles } from "../style";
import type { LinkProps } from "../props";

export function Link(props: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        linkStyles({
          ...renderProps,
          className,
          variant: props.variant,
          color: props.color,
        }),
      )}
    />
  );
}
