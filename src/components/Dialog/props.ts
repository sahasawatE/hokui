import React from "react";
import { DialogProps as AriaDialogProps } from "react-aria-components";
import { type PlacementAxis } from "react-aria";

export interface DialogProps extends AriaDialogProps {
  activator: React.ReactNode;
  activatorClassName?: string;
  label?: string;
  placement?: PlacementAxis;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
}
