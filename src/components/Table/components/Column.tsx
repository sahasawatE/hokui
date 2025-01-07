import {
  Column as AriaColumn,
  Group,
  composeRenderProps,
} from "react-aria-components";
import { ArrowUp } from "lucide-react";
import { composeTailwindRenderProps } from "../../utils";
import { ColumnDecoration, columnStyles } from "../style";
import type { ColumnProps } from "../props";

export function Column(props: ColumnProps) {
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
