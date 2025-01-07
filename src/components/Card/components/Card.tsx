import React from "react";
import { twMerge } from "tailwind-merge";
import useSlot from "react-use-slots";
import { cardStyle } from "../style";
import type { AvailableSlotName, CardProps } from "../props";

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
