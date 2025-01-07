import React from "react";
import type { TabListProps } from "react-aria-components";
import type { Color, TabsVariant } from "../types/prop.type";
export interface TabsContextType {
    variant?: TabsVariant;
    color?: Color;
}
export type TabsProps<T> = {
    selectedKey?: string;
    defaultSelectedKey?: string;
    label?: string;
    orientation?: "vertical" | "horizontal";
    disabledKeys?: string[];
    className?: string;
    variant?: TabsVariant;
    color?: Color;
    height?: number;
    items: T[];
    classNames?: {
        base?: string;
        tabItems?: string;
        tabPanels?: string;
    };
    onSelectionChange?: (key: string) => void;
    renderTabItems?: (tabItemProps: T) => React.ReactNode;
    children: (item: T) => React.ReactNode;
};
export interface TabListProp<T> extends TabListProps<T>, TabsContextType {
}
