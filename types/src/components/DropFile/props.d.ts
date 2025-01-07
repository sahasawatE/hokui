import { type DropZoneProps as AriaDropZoneProps, type ValidationResult } from "react-aria-components";
import type { Color, Rounded } from "../types/prop.type";
export declare const defaultAccept: string[];
interface customProps {
    color?: Color;
    rounded?: Rounded;
    value: File[];
    maxLength?: number;
    showDeleteButton?: boolean;
    accept?: string[];
    addFileButtonText?: React.ReactNode;
    placeholder?: string;
    renderPreview?: (file: File) => React.ReactNode;
    onClickDelete?: (file: File, index: number) => void;
    onChange?: (files: File[]) => void;
}
export interface DropFileProps extends Omit<AriaDropZoneProps, "getDropOperation" | "onDropEnter" | "onDropExit" | "onDrop" | "onDropActivate" | "onDropMove" | "onHoverChange" | "onHoverEnd" | "onHoverStart">, customProps {
    isInvalid?: boolean;
    errorMessage?: string | ((validation: ValidationResult) => string);
    isRequired?: boolean;
    label?: string;
    description?: string;
    hideAddFileButton?: boolean;
}
export interface PreviewRendererProps extends customProps {
    hasFile: boolean;
}
export {};
