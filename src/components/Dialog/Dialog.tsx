import React from "react";
import {
  DialogProps,
  DialogTrigger,
  Dialog as RACDialog,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Popover } from "../Popover";

export interface DialogProp extends DialogProps {
  activator?: () => React.ReactNode;
  label?: string;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
}

export function Dialog(props: DialogProp) {
  return (
    <DialogTrigger>
      <Popover showArrow label={props.label} activator={props.activator}>
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
