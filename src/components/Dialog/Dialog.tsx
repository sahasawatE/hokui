import React from "react";
import {
  DialogProps as AriaDialogProps,
  DialogTrigger,
  Dialog as RACDialog,
} from "react-aria-components";
import { type PlacementAxis } from "react-aria";
import { twMerge } from "tailwind-merge";
import { Popover } from "../Popover";

export interface DialogProps extends AriaDialogProps {
  activator: React.ReactNode;
  activatorClassName?: string;
  label?: string;
  placement?: PlacementAxis;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
}

export function Dialog(props: DialogProps) {
  return (
    <DialogTrigger>
      <Popover
        showArrow
        elementType={props.elementType}
        placement={props.placement}
        label={props.label}
        activator={props.activator}
        activatorClassName={props.activatorClassName}
      >
        <RACDialog
          {...props}
          className={twMerge(
            "outline outline-0 p-2 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative",
            props.className,
          )}
        />
      </Popover>
    </DialogTrigger>
  );
}
