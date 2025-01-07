import { useContext } from "react";
import {
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
} from "react-aria-components";
import { Check } from "lucide-react";
import { listBoxContext } from "./context";
import { dropdownItemStyles } from "../style";
import type { ListBoxItemProps } from "../props";

export function DropdownItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  const ctx = useContext(listBoxContext);
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={(renderProps) =>
        dropdownItemStyles({ ...renderProps, color: ctx.color })
      }
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className="flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold">
            {children}
          </span>
          <span className="flex items-center w-5">
            {isSelected && <Check className="w-4 h-4" />}
          </span>
        </>
      ))}
    </AriaListBoxItem>
  );
}
