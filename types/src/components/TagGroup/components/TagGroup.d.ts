import type { TagGroupProps } from "../props";
export declare function TagGroup<T extends {
    [key: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, items, children, renderEmptyState, selectionMode, ...props }: TagGroupProps<T>): import("react/jsx-runtime").JSX.Element;
