import type { ReactNode } from "react";
import type { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps, TagListProps } from "react-aria-components";
import type { Color, TagVariant, TagRounded, SelectionMode } from "../types/prop.type";
export interface TagContext {
    color?: Color;
    variant?: TagVariant;
    rounded?: TagRounded;
}
export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, "children" | "onRemove" | "selectionMode">, Pick<TagListProps<T>, "children" | "renderEmptyState"> {
    color?: Color;
    label?: string;
    description?: string;
    errorMessage?: string;
    variant?: TagVariant;
    rounded?: TagRounded;
    items?: T[];
    selectionMode?: SelectionMode;
    onRemove?: (keys: string[]) => void;
}
export interface TagItemProps extends Omit<AriaTagProps, "children">, TagContext {
    children: ReactNode;
}
export interface ChipProps extends Omit<TagItemProps, "children" | "textValue" | "ping"> {
    label?: string;
    description?: string;
    errorMessage?: string;
    children: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
}
