import { DropdownSection, DropdownSectionProps } from "../../ListBox";

export function ComboBoxSection<
  T extends { [k: string]: any; key: string; title: string },
>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
