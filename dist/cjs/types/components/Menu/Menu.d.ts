import { MenuProps as AriaMenuProps, MenuItemProps, SeparatorProps } from "react-aria-components";
import { DropdownSectionProps } from "../ListBox/ListBox";
import { PopoverProps } from "../Popover/Popover";
import type { Button } from "../Button";
export interface MenuProps<T> extends AriaMenuProps<T> {
    placement?: PopoverProps["placement"];
    activator?: () => ReturnType<typeof Button>;
    label?: string;
}
export declare function Menu<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: MenuProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export declare function MenuSeparator(props: SeparatorProps): import("react/jsx-runtime").JSX.Element;
export declare function MenuSection<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
