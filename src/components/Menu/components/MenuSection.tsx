import { DropdownSection } from "../../ListBox";

import type { MenuSectionProps } from "../props";

export function MenuSection<
  T extends { [k: string]: any; key: string; title: string },
>(props: MenuSectionProps<T>) {
  return <DropdownSection {...props} />;
}
