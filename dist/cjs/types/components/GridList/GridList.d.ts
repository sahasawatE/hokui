import React from "react";
import { GridListItemProps, GridListProps } from "react-aria-components";
import type { ListData } from "react-stately";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
type customGridListProps<T> = {
    items?: ListData<T>;
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    allowDragandDrop?: boolean;
    children?: (item: T) => React.ReactNode;
    onSelect?: (value: string[]) => void;
};
export type GridListP<T> = Omit<GridListProps<T>, "items" | "children" | "onSelectionChange"> & customGridListProps<T>;
export type GridListItemP = GridListItemProps;
export declare function GridList<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: GridListP<T>): import("react/jsx-runtime").JSX.Element;
export declare function GridListItem({ children, ...props }: GridListItemP): import("react/jsx-runtime").JSX.Element;
export {};
