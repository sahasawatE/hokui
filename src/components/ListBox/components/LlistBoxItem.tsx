import { useContext } from "react";
import {
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
} from "react-aria-components";
import { listBoxContext } from "./context";
import { itemStyles } from "../style";
import type { ListBoxItemProps } from "../props";

export function ListBoxItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  const ctx = useContext(listBoxContext);
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={(renderProps) =>
        itemStyles({
          ...renderProps,
          color: ctx.color,
        })
      }
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <div className="absolute left-4 right-4 bottom-0 h-px bg-white/20 forced-colors:bg-[HighlightText] hidden [.group[data-selected]:has(+[data-selected])_&]:block" />
        </>
      ))}
    </AriaListBoxItem>
  );
}
