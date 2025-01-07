import type { SelectProps } from "../props";
export declare function Select<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, children, items, isRequired, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
