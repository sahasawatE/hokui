import React from "react";
import type { TooltipProps as AriaTooltipProps } from "react-aria-components";

export interface TooltipProps extends Omit<AriaTooltipProps, "children"> {
  children: React.ReactNode;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
  activator: React.ReactNode;
  delay?: number;
}
