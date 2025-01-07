import { useContext } from "react";
import {
  Tag as AriaTag,
  Button,
  composeRenderProps,
} from "react-aria-components";
import { XIcon } from "lucide-react";
import { ColorContext } from "./context";
import { removeButtonStyles, tagStyles } from "../style";
import type { TagItemProps } from "../props";

export function Tag({ children, ...props }: TagItemProps) {
  let textValue = typeof children === "string" ? children : undefined;
  let groupCtx = useContext(ColorContext);
  return (
    <AriaTag
      textValue={textValue}
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tagStyles({
          ...renderProps,
          className,
          color: groupCtx.color,
          rounded: groupCtx.rounded,
          variant: groupCtx.variant,
        }),
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button
              slot="remove"
              className={(renderProps) =>
                removeButtonStyles({ ...renderProps, color: groupCtx.color })
              }
            >
              <XIcon aria-hidden className="w-3 h-3" />
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
