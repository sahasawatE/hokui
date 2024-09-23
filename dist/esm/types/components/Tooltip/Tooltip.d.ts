import React from "react";
import { TooltipProps as AriaTooltipProps } from "react-aria-components";
export interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
    children: React.ReactNode;
}
export declare function Tooltip({ children, ...props }: TooltipProps): import("react/jsx-runtime").JSX.Element;
