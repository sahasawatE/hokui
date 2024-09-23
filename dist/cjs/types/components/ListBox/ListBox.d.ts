import React from "react";
import { ListBoxProps as AriaListBoxProps, ListBoxItemProps, SectionProps } from "react-aria-components";
import type { Color } from "../types/prop.type";
type CustomProps = {
    color?: Color;
};
interface ListBoxProps<T> extends Omit<AriaListBoxProps<T>, "layout" | "orientation" | "children">, CustomProps {
    children?: (item: T) => React.ReactNode;
    onSelect?: (value: string[]) => void;
}
export declare function ListBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ children, ...props }: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare const itemStyles: import("tailwind-variants").TVReturnType<{
    isSelected: {
        false: string;
        true: string;
    };
    isDisabled: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, undefined, "group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none", import("tailwind-variants/dist/config").TVConfig<{
    isSelected: {
        false: string;
        true: string;
    };
    isDisabled: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", import("tailwind-variants/dist/config").TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", import("tailwind-variants/dist/config").TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>>;
export declare function ListBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare const dropdownItemStyles: import("tailwind-variants").TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, undefined, "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded outline outline-0 text-sm forced-color-adjust-none", import("tailwind-variants/dist/config").TVConfig<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}>, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, undefined, "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded outline outline-0 text-sm forced-color-adjust-none", import("tailwind-variants/dist/config").TVConfig<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
}>, unknown, unknown, undefined>>;
export declare function DropdownItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string;
}
export declare function DropdownSection<T extends object>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
