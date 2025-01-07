import { TagGroup as AriaTagGroup, TagList } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { ColorContext } from "./context";
import type { TagGroupProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function TagGroup<
  T extends { [key: string]: any; key: string; title: string },
>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  selectionMode,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup
      {...props}
      selectionMode={selectionMode}
      onRemove={(keys) => {
        if (props.onRemove) {
          props.onRemove(Array.from(keys).map((e) => String(e)));
        }
      }}
      className={twMerge("flex flex-col justify-center gap-1", props.className)}
    >
      <WithLabel
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        {items && (
          <ColorContext.Provider
            value={{
              color: props.color,
              variant: props.variant,
              rounded: props.rounded,
            }}
          >
            <TagList
              items={items}
              renderEmptyState={renderEmptyState}
              className="flex flex-wrap gap-1"
            >
              {children}
            </TagList>
          </ColorContext.Provider>
        )}
      </WithLabel>
    </AriaTagGroup>
  );
}
