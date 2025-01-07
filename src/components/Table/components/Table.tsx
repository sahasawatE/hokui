import { Table as AriaTable, TableBody } from "react-aria-components";
import { motion } from "framer-motion";
import { Loading } from "../../Loading";
import { Column } from "./Column";
import {
  TableLoadingOverlayStyle,
  TableContainerStyle,
  TableStyle,
} from "../style";
import { TableHeader } from "./TableHeader";
import { Row } from "./Row";
import { Cell } from "./Cell";
import type { TableProp } from "../props";
import TablePagination from "./TablePagination";

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
          <div className="bg-white border w-20 h-20 rounded-xl p-2 flex flex-col justify-center items-center top-1/2 left-1/2">
            <Loading size="xl" color={props.color} />
          </div>
        </div>
      </motion.div>
      <div
        className={TableContainerStyle({
          rounded: props.rounded,
          hideScrollbar: props.hideScrollbar,
        })}
        style={{
          maxHeight: `${props.height ?? "580"}px`,
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
                  Array.from(key)
                    .map((e) => props.items.find((f) => f.key === e))
                    .filter((e) => !!e),
                );
              }
            }

            return undefined;
          }}
        >
          <TableHeader
            color={props.color}
            showRowNumber={props.showRowNumber}
            rowNumberTitle={props.rowNumberTitle}
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
          <TableBody items={props.items}>
            {(item) => (
              <Row
                id={item.key}
                showRowNumber={props.showRowNumber}
                number={props.items.findIndex((e) => e.key === item.key)}
                page={props.paging.page}
                perPage={props.paging.perPage}
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
      {props.renderPagination
        ? props.renderPagination
        : !props.hidePagination && (
            <TablePagination
              paging={props.paging}
              color={props.color}
              perPageOption={props.perPageOption}
              onPagechange={props.onPagechange}
            />
          )}
    </div>
  );
}
