import { TableProps } from "react-aria-components";
import type { DataTableProps } from "../types/prop.type";
interface TableCustomProps<T extends {
    [key: string]: any;
    key: string;
    title: string;
}> extends Omit<TableProps, "children" | "onSelectionChange">, DataTableProps<T> {
    onSelect?: (selected: any) => void;
    allowDragAndDrop?: boolean;
}
export declare function Table<T extends {
    [key: string]: any;
    key: string;
    title: string;
}>(props: TableCustomProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
