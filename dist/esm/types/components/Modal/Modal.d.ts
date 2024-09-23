import { ModalOverlayProps } from "react-aria-components";
import type { Size } from "../types/prop.type";
type customeProps = {
    title?: string;
    size?: Size;
    onCancel?: () => void;
    onOk?: () => void;
};
export type ModalProps = ModalOverlayProps & customeProps;
export declare function Modal(props: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
