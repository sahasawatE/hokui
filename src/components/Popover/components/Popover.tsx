import {
  OverlayArrow,
  Popover as AriaPopover,
  composeRenderProps,
  PopoverContext,
  useSlottedContext,
  Button,
} from "react-aria-components";
import { motion, type TargetAndTransition } from "framer-motion";
import type { Placement, PlacementAxis } from "react-aria";
import { defaultActivatorStyles, popoverStyles } from "../style";
import type { PopoverProps } from "../props";

export function Popover({
  children,
  showArrow,
  className,
  ...props
}: PopoverProps) {
  let popoverContext = useSlottedContext(PopoverContext)!;
  let isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
  let offset = showArrow
    ? props.offset
      ? props.offset + 2
      : 6
    : props.offset ?? 4;
  let crossOffset = props.crossOffset ?? 0;
  offset = isSubmenu ? offset - 6 : offset;

  const animatePlacement = (
    placement: PlacementAxis,
    isEntering: boolean,
    isExiting: boolean,
  ): TargetAndTransition => {
    switch (placement) {
      case "bottom":
        if (isEntering && !isExiting) {
          return { translateY: 4, opacity: 1 };
        } else if (!isEntering && isExiting) {
          return { translateY: 0, opacity: 0 };
        }

        return { translateY: 4, opacity: 1 };

      case "top":
        if (isEntering && !isExiting) {
          return { translateY: -4, opacity: 1 };
        } else if (!isEntering && isExiting) {
          return { translateY: 0, opacity: 0 };
        }

        return { translateY: -4, opacity: 1 };

      case "right":
        if (isEntering && !isExiting) {
          return { translateX: 4, opacity: 1 };
        } else if (!isEntering && isExiting) {
          return { translateX: 0, opacity: 0 };
        }

        return { translateX: 4, opacity: 1 };

      case "left":
        if (isEntering && !isExiting) {
          return { translateX: -4, opacity: 1 };
        } else if (!isEntering && isExiting) {
          return { translateX: 0, opacity: 0 };
        }

        return { translateX: -4, opacity: 1 };

      default:
        return { scale: 1, opacity: 1 };
    }
  };

  return (
    <>
      <Button
        className={defaultActivatorStyles({
          className: props.activatorClassName,
        })}
      >
        {props.activator}
      </Button>
      <AriaPopover
        {...props}
        placement={props.placement as Placement}
        offset={offset}
        crossOffset={crossOffset}
        className={composeRenderProps(className, (className, renderProps) =>
          popoverStyles({ ...renderProps, className }),
        )}
      >
        {(renderProps) => (
          <motion.div
            animate={animatePlacement(
              renderProps.placement,
              renderProps.isEntering,
              renderProps.isExiting,
            )}
            className="p-1 bg-white opacity-0 shadow-2xl rounded-xl bg-clip-padding border border-black/10 text-slate-700 shadow-sm"
          >
            {showArrow && (
              <OverlayArrow className="group">
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  className="block fill-white stroke-1 stroke-black/10 rotate-180 group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
                >
                  <path d="M0 0 L6 6 L12 0" />
                </svg>
              </OverlayArrow>
            )}
            {children}
          </motion.div>
        )}
      </AriaPopover>
    </>
  );
}
