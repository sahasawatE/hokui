import React from "react";
import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from "react-aria-components";
import { DropdownSectionProps } from "../ListBox/ListBox";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
export interface ComboBoxProps<T extends {
    [k: string]: any;
    key: string;
    title: string;
}> extends Omit<AriaComboBoxProps<T>, "children" | "onSelectionChange"> {
    label?: string;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
    children?: (item: T) => React.ReactNode;
    onSelectionChange?: (key: string) => void;
}
export declare function ComboBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, children, items, ...props }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxSection<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
