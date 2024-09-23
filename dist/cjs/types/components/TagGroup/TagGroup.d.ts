import { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps, TagListProps } from "react-aria-components";
import type { Color, ChipVariant, ChipRounded, SelectionMode } from "../types/prop.type";
import type { ListData } from "react-stately";
export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, "children" | "onRemove" | "selectionMode">, Pick<TagListProps<T>, "children" | "renderEmptyState"> {
    color?: Color;
    label?: string;
    description?: string;
    errorMessage?: string;
    variant?: ChipVariant;
    rounded?: ChipRounded;
    items?: ListData<T>;
    selectionMode?: SelectionMode;
    onRemove?: (keys: string[]) => void;
}
export declare function TagGroup<T extends {
    [key: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, items, children, renderEmptyState, selectionMode, ...props }: TagGroupProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function Tag({ children, ...props }: AriaTagProps): import("react/jsx-runtime").JSX.Element;
