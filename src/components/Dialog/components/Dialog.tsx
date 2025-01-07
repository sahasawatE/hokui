import { DialogTrigger, Dialog as RACDialog } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Popover } from "../../Popover";
import type { DialogProps } from "../props";

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
