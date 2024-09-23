import React from "react";
import {
  DialogProps,
  DialogTrigger,
  Dialog as RACDialog,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Popover } from "../Popover";
import type { Button } from "../Button";

interface DialogProp extends DialogProps {
  activator?: () => ReturnType<typeof Button>;
  label?: string;
}

export function Dialog(props: DialogProp) {
  return (
    <DialogTrigger>
      <Popover showArrow label={props.label} activator={props.activator}>
        <RACDialog
          {...props}
          className={twMerge(
            "outline outline-0 p-6 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative",
            props.className,
          )}
        />
      </Popover>
    </DialogTrigger>
  );
}
