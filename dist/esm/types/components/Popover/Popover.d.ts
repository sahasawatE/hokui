import { PopoverProps as AriaPopoverProps } from "react-aria-components";
import React from "react";
import { Button } from "../Button";
type CustomProps = {
    activator?: () => ReturnType<typeof Button>;
    label?: string;
};
export interface PopoverProps extends Omit<AriaPopoverProps, "children">, CustomProps {
    showArrow?: boolean;
    children: React.ReactNode;
}
export declare function Popover({ children, showArrow, className, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
