import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components";
import React from "react";
import { tv } from "tailwind-variants";
import { Button } from "../Button";

type CustomProps = {
  activator?: () => ReturnType<typeof Button>;
  label?: string;
};

export interface PopoverProps
  extends Omit<AriaPopoverProps, "children">,
    CustomProps {
  showArrow?: boolean;
  children: React.ReactNode;
}

const styles = tv({
  base: "p-1 bg-white forced-colors:bg-[Canvas] shadow-2xl rounded-xl bg-clip-padding border border-black/10 text-slate-700",
  variants: {
    isEntering: {
      true: "animate-in fade-in ease-out duration-200",
    },
    placement: {
      left: "",
      right: "",
      top: "",
      bottom: "",
      center: "",
    },
    isExiting: {
      true: "animate-out fade-out ease-in duration-150",
    },
  },
  compoundVariants: [
    {
      isEntering: true,
      placement: "left",
      class: "placement-left:slide-in-from-right-1",
    },
    {
      isEntering: true,
      placement: "right",
      class: "placement-right:slide-in-from-left-1",
    },
    {
      isEntering: true,
      placement: "top",
      class: "placement-top:slide-in-from-bottom-1",
    },
    {
      isEntering: true,
      placement: "bottom",
      class: "placement-bottom:slide-in-from-top-1",
    },
    {
      isExiting: true,
      placement: "left",
      class: "placement-left:slide-out-to-right-1",
    },
    {
      isExiting: true,
      placement: "right",
      class: "placement-right:slide-out-to-left-1",
    },
    {
      isExiting: true,
      placement: "top",
      class: "placement-top:slide-out-to-bottom-1",
    },
    {
      isExiting: true,
      placement: "bottom",
      class: "placement-bottom:slide-out-to-top-1",
    },
  ],
});

export function Popover({
  children,
  showArrow,
  className,
  ...props
}: PopoverProps) {
  let popoverContext = useSlottedContext(PopoverContext)!;
  let isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
  let offset = showArrow ? 12 : 8;
  let crossOffset = 0;
  offset = isSubmenu ? offset - 6 : offset;

  return (
    <>
      {props.activator ? props.activator() : <Button>{props.label}</Button>}
      <AriaPopover
        offset={offset}
        crossOffset={crossOffset}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          styles({ ...renderProps, className }),
        )}
      >
        {showArrow && (
          <OverlayArrow className="group">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              className="block fill-white forced-colors:fill-[Canvas] stroke-1 stroke-black/10 forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
            >
              <path d="M0 0 L6 6 L12 0" />
            </svg>
          </OverlayArrow>
        )}
        {children}
      </AriaPopover>
    </>
  );
}
