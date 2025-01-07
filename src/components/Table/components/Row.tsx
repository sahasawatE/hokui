import {
  Row as AriaRow,
  Collection,
  useTableOptions,
} from "react-aria-components";
import { Checkbox } from "../../Checkbox";
import { rowStyles } from "../style";
import { Cell } from "./Cell";
import type { RowProps } from "../props";

export function Row<T extends object>({
  columns,
  children,
  ...otherProps
}: RowProps<T>) {
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
      {otherProps.showRowNumber && (
        <Cell>
          <div className="flex flex-row justify-center max-w-10">
            {String(
              otherProps.number !== undefined && otherProps.number !== -1
                ? (otherProps.page - 1) * otherProps.perPage +
                    (otherProps.number + 1)
                : "",
            )}
          </div>
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}
