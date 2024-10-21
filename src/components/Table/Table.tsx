import { ArrowUp, LoaderCircle } from "lucide-react";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  CellProps,
  Collection,
  ColumnProps,
  Group,
  RowProps,
  TableBody,
  TableHeaderProps,
  TableProps,
  composeRenderProps,
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
  TableRounded,
  DataTablePaginationProps,
} from "../types/prop.type";
import { Select, SelectItem } from "../Select";
import { Label } from "../Field";
import { motion } from "framer-motion";
import { Pagination } from "../Pagination";

interface TableProp<T extends { [key: string]: any; key: string }>
  extends Omit<TableProps, "children" | "onSelectionChange">,
    DataTableProps<T> {
  onSelect?: (selected: any) => void;
  isLoading?: boolean;
  allowDragAndDrop?: boolean;
  rounded?: TableRounded;
  hidePagination?: boolean;
  hideScrollbar?: boolean;
  pagination?: React.ReactNode;
  perPageOption?: { key: string; title: string }[];
  onPagechange?: (paging: DataTablePaginationProps) => void;
}

const TableStyle = tv({
  base: "min-w-[550px] overflow-auto scroll-pt-[2.281rem] relative",
  variants: {
    variant: {
      bordered: "bg-transparent drop-shadow-none",
      flat: "border-0 bg-white drop-shadow-none",
      float: "border-0 bg-white drop-shadow-md",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
  },
});

const TableContainerStyle = tv({
  base: "border max-w-full overflow-auto",
  variants: {
    rounded: TableStyle.variants.rounded,
    hideScrollbar: {
      true: "no-scrollbar",
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});

const TableLoadingOverlayStyle = tv({
  base: "absolute w-full h-full bg-black/10 backdrop-blur-sm",
  variants: {
    rounded: TableStyle.variants.rounded,
  },
  defaultVariants: {
    rounded: "md",
  },
});

export function Table<T extends { [key: string]: any; key: string }>(
  props: TableProp<T>,
) {
  return (
    <div className="flex flex-col gap-2 relative">
      <motion.div
        animate={
          props.isLoading
            ? {
                display: "block",
                opacity: 1,
                zIndex: 1,
              }
            : {
                opacity: 0,
                transitionEnd: {
                  zIndex: -1,
                  display: "none",
                },
              }
        }
        className={TableLoadingOverlayStyle({
          rounded: props.rounded,
        })}
      >
        <div className="flex flex-row items-center h-full justify-center">
          <div className="bg-white border w-20 h-20 rounded-xl p-2 flex flex-col justify-center items-center">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.2, 1],
              }}
            >
              <LoaderCircle
                size={40}
                className="text-[hsl(var(--hok-default-500))]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div
        className={TableContainerStyle({
          rounded: props.rounded,
          hideScrollbar: props.hideScrollbar,
        })}
        style={{
          maxHeight: `${props.hiehgt ?? "580"}px`,
          width: props.width ? `${props.width}px` : "100%",
        }}
      >
        <AriaTable
          {...props}
          aria-label="data-table"
          className={TableStyle({
            variant: props.variant,
            rounded: props.rounded,
            className: "border-separate border-spacing-0 w-full",
          })}
          onSelectionChange={(key) => {
            if (props.onSelect) {
              if (typeof key === "string") {
                return props.onSelect(props.items);
              } else {
                return props.onSelect(
                  Array.from(key).map((e) =>
                    props.items.find((f) => f.key === e),
                  ),
                );
              }
            }

            return undefined;
          }}
        >
          <TableHeader color={props.color}>
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
          <TableBody items={props.items}>
            {(item) => (
              <Row
                id={item.key}
                color={props.color}
                isDisabled={Boolean(item["disabled"])}
              >
                {props.header.map((h, j) =>
                  props.children ? (
                    <Cell key={j} align={h.decoration?.align}>
                      {props.children({
                        index: props.items.findIndex((e) => e.key === item.key),
                        value: item[h.key],
                        columnValue: item,
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
      </div>
      {props.pagination
        ? props.pagination
        : !props.hidePagination && (
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <Label>แสดงข้อมูล</Label>
                <Select
                  aria-label="paging"
                  defaultSelectedKey="50"
                  selectedKey={String(props.paging.perPage)}
                  color={props.color}
                  items={
                    props.perPageOption ?? [
                      { key: "50", title: "50" },
                      { key: "100", title: "100" },
                      { key: "150", title: "150" },
                      { key: "200", title: "200" },
                    ]
                  }
                  className="w-20"
                  onSelect={({ key }) => {
                    if (props.onPagechange) {
                      const perPage = Number(key);

                      props.onPagechange({
                        ...props.paging,
                        perPage,
                      });
                    }
                  }}
                >
                  {(page) => (
                    <SelectItem key={page.key}>{page.title}</SelectItem>
                  )}
                </Select>
                <Label>จากทั้งหมด {props.paging.total} รายการ</Label>
              </div>
              <Pagination
                page={props.paging.page}
                perPage={props.paging.perPage}
                total={props.paging.total}
                color={props.color}
                onPagechange={props.onPagechange}
              />
            </div>
          )}
    </div>
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

const TableHeaderStyles = tv({
  base: "sticky top-0 z-10 bg-[--c] backdrop-blur-md mix-blend-multiply supports-[-moz-appearance:none]:bg-default-[--c] border-b h-12",
  variants: {
    color: {
      default: "[--c:hsl(var(--hok-default-100))]",
      primary: "[--c:hsl(var(--hok-primary-100))]",
      secondary: "[--c:hsl(var(--hok-secondary-100))]",
      success: "[--c:hsl(var(--hok-success-100))]",
      warning: "[--c:hsl(var(--hok-warning-100))]",
      danger: "[--c:hsl(var(--hok-danger-100))]",
      info: "[--c:hsl(var(--hok-info-100))]",
    },
  },
  defaultVariants: {
    color: "default",
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
};

function TableHeader<T extends object>(
  props: TableHeaderProps<T> & CustomTableHeaderprops,
) {
  let { selectionBehavior, selectionMode } = useTableOptions();

  return (
    <AriaTableHeader
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        TableHeaderStyles({
          color: props.color,
        }),
      )}
    >
      {selectionBehavior === "toggle" && (
        <AriaColumn className="text-center text-sm font-semibold cursor-default h-12 w-12 px-2">
          <div className="max-w-10 flex flex-row justify-center items-center">
            {selectionMode === "multiple" && (
              <Checkbox slot="selection" color={props.color} />
            )}
          </div>
        </AriaColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  );
}

const rowStyles = tv({
  extend: focusRing,
  base: "hover:bg-[hsl(var(--c)/0.1)] selected:bg-[hsl(var(--c)/0.2)] selected:hover:bg-[hsl(var(--c)/0.3)]",
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
};

function Row<T extends object>({
  columns,
  children,
  ...otherProps
}: Omit<RowProps<T>, "isDisabled"> & CustomRowProps) {
  let { selectionBehavior } = useTableOptions();

  return (
    <AriaRow
      {...otherProps}
      isDisabled={otherProps.isDisabled}
      className={(renderProps) =>
        rowStyles({
          ...renderProps,
          color: otherProps.color,
          className:
            "text-default-800 group/row relative cursor-default -outline-offset-2 text-sm transition-colors",
        })
      }
    >
      {selectionBehavior === "toggle" && (
        <Cell>
          <div className="flex flex-row justify-center max-w-10">
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
