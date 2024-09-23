import React, { createContext, useContext } from "react";
import { GripVertical } from "lucide-react";
import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  Button,
  GridListItemProps,
  GridListProps,
  useDragAndDrop,
} from "react-aria-components";
import type { ListData } from "react-stately";
import { tv } from "tailwind-variants";
import { Checkbox } from "../Checkbox";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type customGridListProps<T> = {
  items?: ListData<T>;
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
  allowDragandDrop?: boolean;
  children?: (item: T) => React.ReactNode;
  onSelect?: (value: string[]) => void;
};

type CustomGridListItemContext = {
  color?: Color;
  allowDragandDrop?: boolean;
};

const GridContext = createContext<CustomGridListItemContext>({
  color: "default",
  allowDragandDrop: false,
});

export type GridListP<T> = Omit<
  GridListProps<T>,
  "items" | "children" | "onSelectionChange"
> &
  customGridListProps<T>;

export type GridListItemP = GridListItemProps;

export function GridList<
  T extends { [k: string]: any; key: string; title: string },
>(props: GridListP<T>) {
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
    renderDragPreview: (items) => {
      if (items.length === 1) {
        return (
          <div className="w-28 h-10 flex flex-row items-center gap-2 bg-white p-2 rounded">
            <span className="w-2/3 overflow-hidden text-ellipsis">
              {items[0]["text/plain"]}
            </span>
            <div className="w-6 h-6 rounded-sm bg-default-200 text-center">
              {items.length}
            </div>
          </div>
        );
      }

      return (
        <div className="relative w-32 h-20">
          <div className="w-28 h-10 bg-white drop-shadow-lg absolute z-[1] rounded overflow-hidden translate-x-1/4 translate-y-1/2">
            <div className="flex flex-row items-center gap-2 bg-white p-2">
              <span className="w-2/3 overflow-hidden text-ellipsis">
                {items[0]["text/plain"]}
              </span>
              <div className="w-6 h-6 rounded-sm bg-default-200 text-center">
                {items.length}
              </div>
            </div>
          </div>
          <div className="w-28 h-10 bg-white absolute top-[0.3rem] left-[0.3rem] rounded-lg translate-x-1/4 translate-y-1/2"></div>
        </div>
      );
    },
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

const itemStyles = tv({
  extend: focusRing,
  base: "relative flex gap-3 cursor-default select-none py-2 px-3 text-sm text-gray-900 border-y border-transparent first:border-t-0 last:border-b-0 first:rounded-t-md last:rounded-b-md -mb-px last:mb-0 -outline-offset-2 transition-colors",
  variants: {
    isSelected: {
      false: "hover:bg-[--bgUnselectedHover]",
      true: "bg-[--bg] hover:bg-[--bgHover] border-y-[--bgHover] z-20",
    },
    isDisabled: {
      true: "text-slate-300 forced-colors:text-[GrayText] z-10",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-200))] [--bgHover:hsl(var(--hok-default-300))] [--bgUnselectedHover:hsl(var(--hok-default-100))]",
      primary:
        "[--bg:hsl(var(--hok-primary-100))] [--bgHover:hsl(var(--hok-primary-200))] [--bgUnselectedHover:hsl(var(--hok-primary-50))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-200))] [--bgHover:hsl(var(--hok-secondary-300))] [--bgUnselectedHover:hsl(var(--hok-secondary-100))]",
      success:
        "[--bg:hsl(var(--hok-success-300))] [--bgHover:hsl(var(--hok-success-400))] [--bgUnselectedHover:hsl(var(--hok-success-200))]",
      danger:
        "[--bg:hsl(var(--hok-danger-300))] [--bgHover:hsl(var(--hok-danger-400))] [--bgUnselectedHover:hsl(var(--hok-danger-200))]",
      warning:
        "[--bg:hsl(var(--hok-warning-300))] [--bgHover:hsl(var(--hok-warning-400))] [--bgUnselectedHover:hsl(var(--hok-warning-200))]",
      info: "[--bg:hsl(var(--hok-info-200))] [--bgHover:hsl(var(--hok-info-300))] [--bgUnselectedHover:hsl(var(--hok-info-100))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export function GridListItem({ children, ...props }: GridListItemP) {
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
          {Boolean(gridContext.allowDragandDrop && allowsDragging) ? (
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
