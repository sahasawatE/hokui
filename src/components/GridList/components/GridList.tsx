import {
  GridList as AriaGridList,
  useDragAndDrop,
} from "react-aria-components";
import type { DragItem } from "react-aria";
import { composeTailwindRenderProps } from "../../utils";
import { GridContext } from "./context";
import { GridListItem } from "./GridListItem";
import type { GridListProps } from "../props";
import {
  PreviewWithLength1,
  PreviewWithLengthMoreThan1,
} from "./PreviewDragItem";

function renderDragPreview(items: DragItem[]) {
  if (items[0]) {
    const title = items[0]["text/plain"];
    if (items.length === 1) {
      return <PreviewWithLength1 title={title} />;
    }

    return <PreviewWithLengthMoreThan1 title={title} length={items.length} />;
  }

  return <div></div>;
}

export function GridList<
  T extends { [k: string]: any; key: string; title: string },
>(props: GridListProps<T>) {
  const { dragAndDropHooks } = useDragAndDrop({
    isDisabled: !Boolean(props.allowDragandDrop),
    getItems: (keys) =>
      Array.from(keys).map((key) => ({
        "text/plain": props.items?.getItem(key).title ?? "",
      })),
    onReorder: (e) => {
      if (props.items) {
        if (e.target.dropPosition === "before") {
          props.items.moveBefore(e.target.key, e.keys);
        } else if (e.target.dropPosition === "after") {
          props.items.moveAfter(e.target.key, e.keys);
        }
      }
    },
    renderDragPreview,
  });

  return (
    <GridContext.Provider
      value={{
        color: props.color,
        allowDragandDrop: props.allowDragandDrop,
      }}
    >
      {props.items && (
        <AriaGridList
          {...props}
          items={props.items.items}
          dragAndDropHooks={dragAndDropHooks}
          onSelectionChange={(e) =>
            props.onSelect
              ? props.onSelect(Array.from(e).map((f) => String(f)))
              : undefined
          }
          className={composeTailwindRenderProps(
            props.className,
            "overflow-auto relative border rounded",
          )}
        >
          {props.children
            ? props.children
            : (item) => (
                <GridListItem key={item.key}>{item.title}</GridListItem>
              )}
        </AriaGridList>
      )}
    </GridContext.Provider>
  );
}
