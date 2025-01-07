import React from "react";
import {
  composeRenderProps,
  Button as RACButton,
  type PressEvent,
} from "react-aria-components";
import { Loading } from "../../Loading";
import { buttonStyle } from "../style";
import type { ButtonProps } from "../props";

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const aRef = React.useRef<HTMLAnchorElement | null>(null);

    const handlePress = (e: PressEvent) => {
      if (props.href && aRef.current) {
        aRef.current.click();
      } else if (props.onPress) {
        props.onPress(e);
      }
    };

    return (
      <>
        <a
          ref={aRef}
          href={props.href}
          target={props.target}
          className="hidden"
        />
        <RACButton
          {...props}
          ref={ref}
          isDisabled={props.isDisabled || props.isLoading}
          className={composeRenderProps(
            props.className,
            (className, renderProps) =>
              buttonStyle({
                ...renderProps,
                variant: props.variant,
                color: props.color,
                rounded: props.rounded,
                size: props.size,
                isLoading: props.isLoading,
                className,
              }),
          )}
          onPress={handlePress}
        >
          {props.isLoading ? (
            <Loading size={props.size} color={props.color} />
          ) : (
            props.children
          )}
        </RACButton>
      </>
    );
  },
);

export { Button };
