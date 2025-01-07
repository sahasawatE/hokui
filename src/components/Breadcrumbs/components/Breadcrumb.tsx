import { ChevronRight } from "lucide-react";
import { Breadcrumb as AriaBreadcrumb } from "react-aria-components";
import { Link } from "../../Link";
import { composeTailwindRenderProps } from "../../utils";
import type { BreadcrumbProps } from "../props";

export function Breadcrumb(props: BreadcrumbProps) {
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
