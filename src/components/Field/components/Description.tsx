import { Text } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import type { TextProps } from "../props";

export function Description(props: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={twMerge("text-sm text-gray-600", props.className)}
    />
  );
}
