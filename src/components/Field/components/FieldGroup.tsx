import { Group, composeRenderProps } from "react-aria-components";
import { motion } from "framer-motion";
import {
  fieldElememtStyles,
  fieldGroupStyles,
  underlinedStyle,
} from "../style";
import type { FieldGroupProps } from "../props";

export function FieldGroup(props: FieldGroupProps) {
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
              className={underlinedStyle({
                color: props.isInvalid ? "danger" : props.color,
              })}
            ></motion.div>
          )}
        </div>
      )}
    </Group>
  );
}
