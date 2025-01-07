import { Cell as AriaCell } from "react-aria-components";
import type { CellProps } from "../props";
import { cellStyles } from "../style";

export function Cell(props: CellProps) {
  return (
    <AriaCell
      {...props}
      className={(renderProps) =>
        cellStyles({ ...renderProps, align: props.align })
      }
    />
  );
}
