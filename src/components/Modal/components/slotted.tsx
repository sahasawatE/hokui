import { type ModalOverlayProps } from "react-aria-components";
import useSlot from "react-use-slots";
import type { AvailableSlotName, customeModalProps } from "../props";

export function RenderSlot(
  props: ModalOverlayProps & customeModalProps,
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
