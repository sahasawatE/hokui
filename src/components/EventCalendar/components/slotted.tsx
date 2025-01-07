import React from "react";
import useSlot from "react-use-slots";
import type { AvailableSlotName } from "../props";

export function RenderSlot(
  children: React.ReactNode,
  slotName?: AvailableSlotName,
  element?: () => React.ReactElement,
) {
  const [slot, hasSlot] = useSlot(children);

  if (slotName && element) {
    if (hasSlot(slotName)) {
      return slot(slotName);
    }

    return element();
  }

  return slot();
}
