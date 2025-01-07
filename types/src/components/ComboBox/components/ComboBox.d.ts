import type { ComboBoxProps } from "../props";
export declare function ComboBox<T extends {
    [k: string]: any;
    key: string;
    title: string;
}>({ label, description, errorMessage, isRequired, children, items, ...props }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
