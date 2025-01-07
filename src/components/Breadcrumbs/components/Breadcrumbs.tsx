import { Breadcrumbs as AriaBreadcrumbs } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import type { BreadcrumbsProps } from "../props";
import { Breadcrumb } from "./Breadcrumb";

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={twMerge("flex gap-1", props.className)}
    >
      {props.menus.map((e, i) => (
        <Breadcrumb key={i} href={props.menus.length - 1 === i ? "" : e.to}>
          {e.title}
        </Breadcrumb>
      ))}
    </AriaBreadcrumbs>
  );
}
