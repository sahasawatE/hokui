import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

export const popoverStyles = tv({
  base: "!z-[99]",
  variants: {
    isEntering: {
      true: "animate-in duration-200",
    },
    isExiting: {
      true: "animate-out duration-200",
    },
  },
});

export const defaultActivatorStyles = tv({
  extend: focusRing,
});
