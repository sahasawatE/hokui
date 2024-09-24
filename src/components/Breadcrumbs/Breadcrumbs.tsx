import { ChevronRight } from "lucide-react";
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbProps,
  type BreadcrumbsProps,
  type LinkProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Link } from "../Link";
import { composeTailwindRenderProps } from "../utils";

export interface BcsProps<T> extends BreadcrumbsProps<T> {
  menus: {
    title: string;
    to?: string;
  }[];
}

export function Breadcrumbs<T extends object>(props: BcsProps<T>) {
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

function Breadcrumb(props: BreadcrumbProps & Omit<LinkProps, "className">) {
  return (
    <AriaBreadcrumb
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex items-center gap-1",
      )}
    >
      <Link variant="text" {...props} />
      {props.href && <ChevronRight className="w-3 h-3 text-gray-600" />}
    </AriaBreadcrumb>
  );
}
