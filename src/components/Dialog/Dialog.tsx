import React from "react";
import {
  DialogProps,
  DialogTrigger,
  Dialog as RACDialog,
} from "react-aria-components";
import { type PlacementAxis } from "react-aria";
import { twMerge } from "tailwind-merge";
import { Popover } from "../Popover";

type BtnOptions = {
  props: any;
  ref: any;
  defaultClassName: string;
};

interface DialogProp extends DialogProps {
  activator?: (btnProps: BtnOptions) => React.ReactNode;
  label?: string;
  placement?: PlacementAxis;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
}

export function Dialog(props: DialogProp) {
  return (
    <DialogTrigger>
      <Popover
        showArrow
        elementType={props.elementType}
        placement={props.placement}
        label={props.label}
        activator={props.activator}
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
