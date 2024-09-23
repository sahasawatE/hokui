import { ArrowUp } from "lucide-react";
import { GripVertical } from "lucide-react";
import React from "react";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  Button,
  CellProps,
  Collection,
  ColumnProps,
  Group,
  ResizableTableContainer,
  RowProps,
  TableBody,
  TableHeaderProps,
  TableProps,
  composeRenderProps,
  useDragAndDrop,
  useTableOptions,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Checkbox } from "../Checkbox";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type {
  DataTableProps,
  FontSize,
  FontWeight,
  Color,
  Alignment,
} from "../types/prop.type";

interface TableCustomProps<
  T extends { [key: string]: any; key: string; title: string },
> extends Omit<TableProps, "children" | "onSelectionChange">,
    DataTableProps<T> {
  onSelect?: (selected: any) => void;
  allowDragAndDrop?: boolean;
}

const TableStyle = tv({
  base: "min-w-[550px] overflow-auto scroll-pt-[2.281rem] relative rounded-lg",
  variants: {
    variant: {
      bordered: "border bg-transparent drop-shadow-none",
      flat: "border-0 bg-white drop-shadow-none",
      float: "border-0 bg-white drop-shadow-md",
    },
  },
  defaultVariants: {
    variant: "bordered",
  },
});

export function Table<
  T extends { [key: string]: any; key: string; title: string },
>(props: TableCustomProps<T>) {
  const { dragAndDropHooks } = useDragAndDrop({
    isDisabled: !Boolean(props.allowDragAndDrop),
    getItems: (keys) =>
      Array.from(keys).map((key) => ({
        "text/plain": props.items.getItem(key).key,
      })),
    onReorder: (e) => {
      if (e.target.dropPosition === "before") {
        props.items.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        props.items.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <ResizableTableContainer
      className={TableStyle({
        variant: props.variant,
      })}
      style={{
        maxHeight: `${props.hiehgt ?? "580"}px`,
        width: `${props.width ?? "550"}px`,
      }}
    >
      <AriaTable
        {...props}
        aria-label="data-table"
        className="border-separate border-spacing-0"
        dragAndDropHooks={dragAndDropHooks}
        onSelectionChange={(key) => {
          if (props.onSelect) {
            if (typeof key === "string") {
              return props.onSelect(props.items.items);
            } else {
              return props.onSelect(
                Array.from(key).map((e) => props.items.getItem(e)),
              );
            }
          }

          return undefined;
        }}
      >
        <TableHeader
          allowDragAndDrop={props.allowDragAndDrop}
          color={props.color}
        >
          {props.header.map((h, i) => (
            <Column
              key={i}
              isRowHeader={Boolean(h.isRowHeader)}
              width={Number(h.decoration?.width)}
              fontWeight={h.decoration?.fontWeight}
              fontSize={h.decoration?.fontSize}
              fontColor={h.decoration?.fontColor}
              align={h.decoration?.align}
            >
              {h.title}
            </Column>
          ))}
        </TableHeader>
        <TableBody items={props.items.items}>
          {(item) => (
            <Row
              allowDragAndDrop={props.allowDragAndDrop}
              id={item.key}
              color={props.color}
              isDisabled={Boolean(item["disabled"])}
            >
              {props.header.map((h, j) =>
                props.children ? (
                  <Cell key={j} align={h.decoration?.align}>
                    {props.children({
                      index: props.items.items.findIndex(
                        (e) => e.key === item.key,
                      ),
                      value: props.items.getItem(item.key)[h.key],
                      columnValue: props.items.getItem(item.key),
                      key: h.key,
                    })}
                  </Cell>
                ) : (
                  <Cell key={j} align={h.decoration?.align}>
                    {item[h.key]}
                  </Cell>
                ),
              )}
            </Row>
          )}
        </TableBody>
      </AriaTable>
    </ResizableTableContainer>
  );
}

const columnStyles = tv({
  extend: focusRing,
  base: "px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden",
});

const ColumnDecoration = tv({
  base: "truncate w-full",
  variants: {
    fontWeight: {
      thin: "font-thin",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    fontColor: {
      default: "text-default-600",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
    },
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },
  defaultVariants: {
    fontWeight: "semibold",
    fontSize: "base",
    fontColor: "default",
    align: "start",
  },
});

type CustomColumnProps = {
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  fontColor?: Color;
  align?: Alignment;
};

function Column(props: ColumnProps & CustomColumnProps) {
  return (
    <AriaColumn
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "[&:hover]:z-20 [&:focus-within]:z-20 font-semibold cursor-default",
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { allowsSorting, sortDirection }) => (
          <div className="flex items-center">
            <Group role="presentation" tabIndex={-1} className={columnStyles}>
              <span
                className={ColumnDecoration({
                  fontWeight: props.fontWeight,
                  fontSize: props.fontSize,
                  fontColor: props.fontColor,
                  align: props.align,
                })}
              >
                {children}
              </span>
              {allowsSorting && (
                <span
                  className={`w-4 h-4 flex items-center justify-center transition ${
                    sortDirection === "descending" ? "rotate-180" : ""
                  }`}
                >
                  {sortDirection && (
                    <ArrowUp
                      aria-hidden
                      className="w-4 h-4 text-gray-500 forced-colors:text-[ButtonText]"
                    />
                  )}
                </span>
              )}
            </Group>
          </div>
        ),
      )}
    </AriaColumn>
  );
}

type CustomTableHeaderprops = {
  color?: Color;
  allowDragAndDrop?: boolean;
};

function TableHeader<T extends object>(
  props: TableHeaderProps<T> & CustomTableHeaderprops,
) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <AriaTableHeader
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "sticky top-0 z-10 bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 forced-colors:bg-[Canvas] rounded-t-lg border-b",
      )}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {Boolean(props.allowDragAndDrop && allowsDragging) && (
        <Column width={26} minWidth={26} />
      )}
      {selectionBehavior === "toggle" && (
        <AriaColumn
          width={48}
          minWidth={48}
          className="text-center text-sm font-semibold cursor-default flex flex-row justify-center items-center h-12"
        >
          {selectionMode === "multiple" && (
            <Checkbox slot="selection" color={props.color} />
          )}
        </AriaColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  );
}

const rowStyles = tv({
  extend: focusRing,
  base: "text-default-800 hover:bg-[hsl(var(--c)/0.1)] selected:bg-[hsl(var(--c)/0.2)] selected:hover:bg-[hsl(var(--c)/0.3)] group/row relative cursor-default select-none -outline-offset-2 text-sm transition-colors",
  variants: {
    color: {
      default: "[--c:var(--hok-default-500)]",
      primary: "[--c:var(--hok-primary-300)]",
      secondary: "[--c:var(--hok-secondary-600)]",
      success: "[--c:var(--hok-success-500)]",
      danger: "[--c:var(--hok-danger-500)]",
      warning: "[--c:var(--hok-warning-500)]",
      info: "[--c:var(--hok-info-500)]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

type CustomRowProps = {
  color?: Color;
  isDisabled?: boolean;
  allowDragAndDrop?: boolean;
};

function Row<T extends object>({
  columns,
  children,
  ...otherProps
}: Omit<RowProps<T>, "isDisabled"> & CustomRowProps) {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <AriaRow
      {...otherProps}
      isDisabled={otherProps.isDisabled}
      className={(renderProps) =>
        rowStyles({ ...renderProps, color: otherProps.color })
      }
    >
      {Boolean(otherProps.allowDragAndDrop && allowsDragging) && (
        <Cell>
          <Button slot="drag" className="flex flex-col justify-center">
            <GripVertical aria-hidden className="w-4 h-4 text-gray-600" />
          </Button>
        </Cell>
      )}
      {selectionBehavior === "toggle" && (
        <Cell>
          <div className="flex flex-row justify-center">
            {!Boolean(otherProps.allowDragAndDrop) && (
              <Button slot="drag" className="hidden"></Button>
            )}
            <Checkbox
              slot="selection"
              color={otherProps.color}
              isDisabled={otherProps.isDisabled}
            />
          </div>
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}

const cellStyles = tv({
  extend: focusRing,
  base: "border-b group-last/row:border-b-0 [--selected-border:hsl(var(--hok-default-100))] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2",
  variants: {
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

type CustomCellProps = {
  align?: Alignment;
};

function Cell(props: CellProps & CustomCellProps) {
  return (
    <AriaCell
      {...props}
      className={(renderProps) =>
        cellStyles({ ...renderProps, align: props.align })
      }
    />
  );
}
