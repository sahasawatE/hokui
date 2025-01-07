import { useContext } from "react";
import {
  GridListItem as AriaGridListItem,
  Button,
} from "react-aria-components";
import { GripVertical } from "lucide-react";
import { Checkbox } from "../../Checkbox";
import { itemStyles } from "../style";
import { GridContext } from "./context";
import type { GridListItemProps } from "../props";

export function GridListItem({ children, ...props }: GridListItemProps) {
  let textValue = typeof children === "string" ? children : undefined;
  const gridContext = useContext(GridContext);

  return (
    <AriaGridListItem
      {...props}
      textValue={textValue}
      className={(renderProps) =>
        itemStyles({
          ...renderProps,
          color: gridContext.color,
        })
      }
    >
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {gridContext.allowDragandDrop && allowsDragging ? (
            <Button slot="drag">
              <GripVertical aria-hidden className="w-4 h-4 text-gray-600" />
            </Button>
          ) : (
            <Button slot="drag" className="hidden"></Button>
          )}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && (
            <Checkbox slot="selection" color={gridContext.color} />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}
