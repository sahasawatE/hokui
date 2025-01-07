import { DropdownSection, type DropdownSectionProps } from "../../ListBox";

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />;
}
