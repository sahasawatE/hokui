import {
  useTableOptions,
  TableHeader as AriaTableHeader,
  Column as AriaColumn,
  Collection,
} from "react-aria-components";
import { composeTailwindRenderProps } from "../../utils";
import { TableHeaderStyles } from "../style";
import { Checkbox } from "../../Checkbox";
import { Column } from "./Column";
import type { TableHeaderProps } from "../props";

export function TableHeader<T extends object>(props: TableHeaderProps<T>) {
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
      {props.showRowNumber && (
        <Column className="w-20">{props.rowNumberTitle ?? "No."}</Column>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </AriaTableHeader>
  );
}
