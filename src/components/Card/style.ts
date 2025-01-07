import { tv } from "tailwind-variants";

export const cardStyle = tv({
  base: "flex flex-col gap-4 w-full p-4 bg-white",
  variants: {
    variant: {
      default: "border",
      bordered: "border",
      flat: "border-0",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    rounded: "md",
    shadow: "sm",
  },
  compoundVariants: [
    {
      variant: ["bordered", "flat"],
      shadow: ["none", "md", "sm", "lg"],
      className: "shadow-none",
    },
  ],
});
