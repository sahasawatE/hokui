import type { TableProp } from "../props";
export declare function Table<T extends {
    [key: string]: any;
    key: string;
}>(props: TableProp<T>): import("react/jsx-runtime").JSX.Element;
