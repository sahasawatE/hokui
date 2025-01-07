import { tv } from "tailwind-variants";

export const progressBarStyles = tv({
  base: "absolute top-0 h-full rounded-full bg-blue-600 forced-colors:bg-[Highlight]",
  variants: {
    isIndeterminate: {
      true: "left-full animate-in duration-1000 [--tw-enter-translate-x:calc(-16rem-100%)] slide-out-to-right-full repeat-infinite ease-out",
      false: "left-0",
    },
  },
});
