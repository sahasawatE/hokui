import { Label as RACLabel } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import type { LabelProps } from "../props";

export function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={twMerge(
        "text-sm text-gray-500 font-medium cursor-default w-fit",
        props.className,
      )}
    />
  );
}
