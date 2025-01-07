import React from "react";
import type { ListData } from "react-stately";
import type {
  GridListItemProps as AriaGridListItemProps,
  GridListProps as AriaGridListProps,
} from "react-aria-components";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

export type customGridListProps<T> = {
  items?: ListData<T>;
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
  allowDragandDrop?: boolean;
  children?: (item: T) => React.ReactNode;
  onSelect?: (value: string[]) => void;
};

export interface CustomGridListItemContext {
  color?: Color;
  allowDragandDrop?: boolean;
}

export interface GridListProps<T>
  extends Omit<
      AriaGridListProps<T>,
      "items" | "children" | "onSelectionChange"
    >,
    customGridListProps<T> {}

export interface GridListItemProps
  extends Omit<AriaGridListItemProps, "children"> {
  children: React.ReactNode;
}
