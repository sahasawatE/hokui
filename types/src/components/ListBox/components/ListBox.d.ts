import type { ListBoxProps } from "../props";
export declare function ListBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ children, ...props }: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
