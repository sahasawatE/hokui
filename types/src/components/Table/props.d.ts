import type { TableProps, ColumnProps as AriaColumnProps, TableHeaderProps as AriaTableHeaderProps, RowProps as AriaRowProps, CellProps as AriaCellProps } from "react-aria-components";
import type { DataTableProps, TableRounded, DataTablePaginationProps, FontSize, FontWeight, Color, Alignment } from "../types/prop.type";
export interface TableProp<T extends {
    [key: string]: any;
    key: string;
}> extends Omit<TableProps, "children" | "onSelectionChange">, DataTableProps<T> {
    onSelect?: (selected: T[]) => void;
    isLoading?: boolean;
    allowDragAndDrop?: boolean;
    rounded?: TableRounded;
    hidePagination?: boolean;
    hideScrollbar?: boolean;
    renderPagination?: React.ReactNode;
    perPageOption?: {
        key: string;
        title: string;
    }[];
    showRowNumber?: boolean;
    rowNumberTitle?: string;
    onPagechange?: (paging: DataTablePaginationProps) => void;
}
interface CustomColumnProps {
    fontWeight?: FontWeight;
    fontSize?: FontSize;
    fontColor?: Color;
    align?: Alignment;
}
export type ColumnProps = AriaColumnProps & CustomColumnProps;
interface CustomTableHeaderprops {
    color?: Color;
    showRowNumber?: boolean;
    rowNumberTitle?: string;
}
export type TableHeaderProps<T extends object> = AriaTableHeaderProps<T> & CustomTableHeaderprops;
interface CustomRowProps {
    color?: Color;
    isDisabled?: boolean;
    showRowNumber?: boolean;
    number?: number;
    page: number;
    perPage: number;
}
export type RowProps<T extends object> = Omit<AriaRowProps<T>, "isDisabled"> & CustomRowProps;
interface CustomCellProps {
    align?: Alignment;
}
export type CellProps = AriaCellProps & CustomCellProps;
export interface TablePaginationProps {
    perPageOption?: {
        key: string;
        title: string;
    }[];
    color?: Color;
    paging: DataTablePaginationProps;
    onPagechange?: (paging: DataTablePaginationProps) => void;
}
export {};
