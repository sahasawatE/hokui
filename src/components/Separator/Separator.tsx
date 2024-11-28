import {
  Separator as RACSeparator,
  SeparatorProps as RACSeparatorProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "bg-gray-300 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type SeparatorProps = RACSeparatorProps;

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
