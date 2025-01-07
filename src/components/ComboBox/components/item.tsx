import { ListBoxItemProps } from "react-aria-components";
import { DropdownItem } from "../../ListBox";

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}
