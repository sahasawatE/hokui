import React from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import useSlot from "react-use-slots";
import type { CardRounded, CardVariant, Shadow } from "../types/prop.type";

const cardStyle = tv({
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

export type CardProps = {
  variant?: CardVariant;
  rounded?: CardRounded;
  shadow?: Shadow;
  title?: string;
  classNames?: {
    base?: string;
    header?: string;
    title?: string;
    content?: string;
  };
  children: React.ReactNode;
};

type AvailableSlotName = "header-content" | "header-actions";

function RenderSlot(
  props: CardProps,
  slotName?: AvailableSlotName,
  element?: () => React.ReactElement,
) {
  const [slot, hasSlot] = useSlot(props.children);

  if (slotName && element) {
    if (hasSlot(slotName)) {
      return slot(slotName);
    }

    return element();
  }

  return slot();
}

export function Card(props: CardProps) {
  return (
    <div className={twMerge(cardStyle(props), props.classNames?.base ?? "")}>
      {/* header */}
      {RenderSlot(props, "header-content", () => (
        <>
          {props.title && (
            <div
              className={twMerge(
                "flex flex-row justify-between items-center",
                props.classNames?.header ?? "",
              )}
            >
              <span
                className={twMerge("text-lg", props.classNames?.title ?? "")}
              >
                {props.title}
              </span>
              {RenderSlot(props, "header-actions", () => (
                <div></div>
              ))}
            </div>
          )}
        </>
      ))}

      {/* content */}
      <div className={twMerge("", props.classNames?.content ?? "")}>
        {RenderSlot(props)}
      </div>
    </div>
  );
}
