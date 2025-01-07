import { ListBox as AriaListBox } from "react-aria-components";
import { composeTailwindRenderProps } from "../../utils";
import { listBoxContext } from "./context";
import { ListBoxItem } from "./LlistBoxItem";
import type { ListBoxProps } from "../props";

export function ListBox<
  T extends { [k: string]: any; key: string; title: string },
>({ children, ...props }: ListBoxProps<T>) {
  return (
    <listBoxContext.Provider value={{ color: props.color }}>
      <AriaListBox
        {...props}
        className={composeTailwindRenderProps(
          props.className,
          "outline-0 p-1 border border-gray-300 rounded-lg",
        )}
        onSelectionChange={(e) =>
          props.onSelect
            ? props.onSelect(Array.from(e).map((f) => String(f)))
            : undefined
        }
      >
        {children
          ? children
          : (e) => <ListBoxItem key={e.key}>{e.title}</ListBoxItem>}
      </AriaListBox>
    </listBoxContext.Provider>
  );
}
