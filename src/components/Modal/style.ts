import { tv } from "tailwind-variants";

export const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

export const modalStyles = tv({
  base: "max-w-6xl max-h-full rounded-2xl bg-white forced-colors:bg-[Canvas] text-left align-middle text-slate-700 shadow-2xl bg-clip-padding border border-black/10",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200",
    },
    size: {
      xs: "w-[60vw] md:w-[20vw]",
      sm: "w-[70vw] md:w-[35vw]",
      md: "w-[80vw] md:w-[50vw]",
      lg: "w-[90vw] md:w-[65vw]",
      xl: "w-[100vw] md:w-[80vw]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const bodyStyle = tv({
  base: "relative max-h-[75vh] overflow-x-hidden",
  variants: {
    hideScrollbar: {
      true: "no-scrollbar",
    },
    isLoading: {
      true: "overflow-y-hidden",
      false: "overflow-y-scroll",
    },
  },
  defaultVariants: {
    hideScrollbar: false,
    isLoading: false,
  },
});
