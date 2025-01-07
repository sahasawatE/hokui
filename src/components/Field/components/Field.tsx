import { Input as RACInput } from "react-aria-components";
import { composeTailwindRenderProps } from "../../utils";
import type { InputProps } from "../props";

export function Input(props: InputProps) {
  return (
    <RACInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "bg-transparent outline-0 px-2 py-1.5 flex-1 min-w-10 text-sm text-default-800 disabled:text-default-400",
      )}
    />
  );
}
