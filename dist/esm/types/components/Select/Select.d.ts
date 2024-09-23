import React from "react";
import { SelectProps as AriaSelectProps, ListBoxItemProps, ValidationResult } from "react-aria-components";
import { DropdownSectionProps } from "../ListBox/ListBox";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
type customProps<T> = {
    rounded?: Rounded;
    color?: Color;
    variant?: InputVariant;
    onSelect?: (value: T) => void;
};
export interface SelectProps<T extends {
    [k: string]: any;
    key: string;
}> extends Omit<AriaSelectProps<T>, "children">, customProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function Select<T extends {
    [k: string]: any;
    key: string;
}>({ label, description, errorMessage, children, items, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function SelectItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare function SelectSection<T extends object>(props: DropdownSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
