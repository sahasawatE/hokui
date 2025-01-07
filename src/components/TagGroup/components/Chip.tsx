import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList,
  Text,
  composeRenderProps,
} from "react-aria-components";
import { Label } from "../../Field";
import { tagStyles } from "../style";
import type { ChipProps } from "../props";

export function Chip({
  children,
  label,
  description,
  errorMessage,
  ...props
}: ChipProps) {
  return (
    <AriaTagGroup
      aria-label={label}
      className="flex flex-col justify-center gap-1"
    >
      <Label>{label}</Label>
      <TagList>
        <AriaTag
          {...props}
          textValue={children}
          className={composeRenderProps(
            props.className,
            (className, renderProps) =>
              tagStyles({
                ...renderProps,
                className,
                color: props.color,
                rounded: props.rounded,
                variant: props.variant,
              }),
          )}
        >
          <div className="flex flex-row items-center gap-1">
            {props.startContent}
            {children}
            {props.endContent}
          </div>
        </AriaTag>
      </TagList>
      {description && (
        <Text slot="description" className="text-sm text-gray-400">
          Your selected categories.
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-danger">
          Your selected categories.
        </Text>
      )}
    </AriaTagGroup>
  );
}
