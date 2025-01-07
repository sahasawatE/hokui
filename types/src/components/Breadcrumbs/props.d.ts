import type { BreadcrumbsProps as AriaBreadcrumbsProps, BreadcrumbProps as AriaBreadcrumbProps, LinkProps } from "react-aria-components";
export interface BreadcrumbsProps<T> extends AriaBreadcrumbsProps<T> {
    menus: {
        title: string;
        to?: string;
    }[];
}
export type BreadcrumbProps = AriaBreadcrumbProps & Omit<LinkProps, "className">;
