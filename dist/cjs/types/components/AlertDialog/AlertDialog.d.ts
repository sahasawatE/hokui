import { ReactNode } from "react";
import { DialogProps } from "react-aria-components";
interface AlertDialogProps extends Omit<DialogProps, "children"> {
    title: string;
    children: ReactNode;
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}
export declare function AlertDialog({ title, cancelLabel, actionLabel, onAction, children, ...props }: AlertDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
