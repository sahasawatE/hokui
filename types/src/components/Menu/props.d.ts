import type { MenuProps as AriaMenuProps, MenuItemProps as AriaMenuItemProps, SeparatorProps as AriaSeparatorProps } from "react-aria-components";
import { DropdownSectionProps as DSProps } from "../ListBox";
import type { Color } from "../types/prop.type";
import type { PopoverProps } from "../Popover";
export interface MenuContext {
    color?: Color;
}
export interface MenuProps<T> extends Omit<AriaMenuProps<T>, "onAction" | "onSelectionChange">, MenuContext {
    placement?: PopoverProps["placement"];
    elementType?: React.JSXElementConstructor<any> | React.ElementType;
    label?: string;
    isOpen?: boolean;
    activator: React.ReactNode;
    onSelect?: (e: string) => void;
    onSelectionChange?: (e: string[]) => void;
}
export type MenuItemProps = AriaMenuItemProps;
export type MenuSeparatorProps = AriaSeparatorProps;
export type MenuSectionProps<T> = DSProps<T>;
