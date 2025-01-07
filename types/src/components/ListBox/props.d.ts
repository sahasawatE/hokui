import React from "react";
import type { ListBoxProps as AriaListBoxProps, ListBoxItemProps as AriaListBoxItemProps, SectionProps } from "react-aria-components";
import type { Color } from "../types/prop.type";
export interface ListBoxContext {
    color?: Color;
}
export interface ListBoxProps<T> extends Omit<AriaListBoxProps<T>, "layout" | "orientation" | "children">, ListBoxContext {
    children?: (item: T) => React.ReactNode;
    onSelect?: (value: string[]) => void;
}
export type ListBoxItemProps = AriaListBoxItemProps;
export interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string;
}
