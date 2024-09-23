import type { ReactNode } from "react";
import type { ListData } from "react-stately";
type Color = "primary" | "secondary" | "default" | "success" | "danger" | "warning" | "info";
type SelectionMode = "multiple" | "single" | "none";
type Alignment = "start" | "center" | "end";
type FontWeight = "thin" | "light" | "medium" | "semibold" | "bold";
type FontSize = "xs" | "sm" | "base" | "lg" | "xl";
type ButtonVariant = "default" | "bordered" | "flat" | "text" | "icon";
type InputVariant = "bordered" | "underlined" | "flat";
type LinkVariant = "text" | "flat";
type Rounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
type Size = "sm" | "md" | "lg" | "xl";
type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type BadgeVariant = "default" | "bordered" | "flat";
type BadgeRounded = "default" | "full";
type ChipVariant = BadgeVariant;
type ChipRounded = BadgeRounded;
type TableVariant = "bordered" | "flat" | "float";
type DataTableHeaderProps = {
    key: string;
    title: string;
    isRowHeader?: boolean;
    decoration?: {
        width?: string | number;
        fontWeight?: FontWeight;
        fontSize?: FontSize;
        fontColor?: Color;
        align?: Alignment;
    };
}[];
type DataTablePaginationProps = {
    page: number;
    perPage: number;
    total: number;
};
type DataTableProps<T extends {
    [key: string]: any;
    key: string;
    title: string;
}> = {
    header: DataTableHeaderProps;
    items: ListData<T>;
    paging: DataTablePaginationProps;
    variant?: TableVariant;
    color?: Color;
    hiehgt?: number | string;
    width?: number | string;
    rounded?: Rounded;
    children?: (cell: {
        index: number;
        key: string;
        value: any;
        columnValue: T;
    }) => ReactNode;
};
export type { Color, ButtonVariant, InputVariant, Rounded, Size, Position, BadgeVariant, BadgeRounded, ChipVariant, ChipRounded, LinkVariant, TableVariant, DataTableProps, FontWeight, FontSize, Alignment, SelectionMode, };
