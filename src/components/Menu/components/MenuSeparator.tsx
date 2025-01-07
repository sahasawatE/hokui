import { Separator } from "react-aria-components";
import type { MenuSeparatorProps } from "../props";

export function MenuSeparator(props: MenuSeparatorProps) {
  return (
    <Separator {...props} className="mx-3 my-1 border-b border-gray-300" />
  );
}
