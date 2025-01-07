import { Separator as RACSeparator } from "react-aria-components";
import { styles } from "../style";
import type { SeparatorProps } from "../props";

export function Separator(props: SeparatorProps) {
  return (
    <RACSeparator
      {...props}
      className={styles({
        orientation: props.orientation,
        className: props.className,
      })}
    />
  );
}
