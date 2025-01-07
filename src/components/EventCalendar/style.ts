import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const callStyle = tv({
  extend: focusRing,
  base: "h-full",
  variants: {
    isDisabled: {
      true: "text-gray-300 border-black/5 cursor-not-allowed",
    },
    isUnavailable: {
      true: "text-gray-300 border-black/5 cursor-not-allowed",
    },
  },
});
