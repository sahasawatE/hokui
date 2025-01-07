import React from "react";
import { type ListData } from "react-stately";
export type WithListDataProps<T extends object> = {
    listData: ListData<T>;
};
export declare function WithListData<T extends {
    [key: string]: any;
    key: string;
}, P extends WithListDataProps<T> = WithListDataProps<T>>(Component: React.ComponentType<P>): (props: Omit<P, keyof WithListDataProps<T>>) => import("react/jsx-runtime").JSX.Element;
