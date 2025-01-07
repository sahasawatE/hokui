import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const selectStyles = tv({
  extend: focusRing,
  base: "group flex flex-col gap-1 min-w-10",
});

export const textStyle = tv({
  base: "flex-1 text-sm",
  variants: {
    isDisabled: {
      false: "placeholder-shown:text-gray-400",
      true: "text-default-400",
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
});
