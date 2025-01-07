import React from "react";
import type { PopoverProps as AriaPopoverProps } from "react-aria-components";
import type { PlacementAxis } from "react-aria";
type CustomPopoverProps = {
    activator: React.ReactNode;
    activatorClassName?: string;
    label?: string;
    elementType?: React.JSXElementConstructor<any> | React.ElementType;
};
export interface PopoverProps extends Omit<AriaPopoverProps, "children" | "placement">, CustomPopoverProps {
    showArrow?: boolean;
    placement?: PlacementAxis;
    children: React.ReactNode;
}
export {};
