import type { ModalOverlayProps } from "react-aria-components";
import type { Size } from "../types/prop.type";

export interface customeModalProps {
  title?: string;
  size?: Size;
  isLoading?: boolean;
  hideScrollbar?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
}

export type AvailableSlotName = "bottom-content" | "header-content";

export type ModalProps = ModalOverlayProps & customeModalProps;
