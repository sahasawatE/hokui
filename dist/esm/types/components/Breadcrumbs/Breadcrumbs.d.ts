import { type BreadcrumbsProps } from "react-aria-components";
export interface BcsProps<T> extends BreadcrumbsProps<T> {
    menus: {
        title: string;
        to?: string;
    }[];
}
export declare function Breadcrumbs<T extends object>(props: BcsProps<T>): import("react/jsx-runtime").JSX.Element;
