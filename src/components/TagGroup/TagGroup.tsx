import { XIcon } from "lucide-react";
import { createContext, useContext } from "react";
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagProps as AriaTagProps,
  Button,
  TagList,
  TagListProps,
  Text,
  composeRenderProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Description, Label } from "../Field";
import { focusRing } from "../utils";
import type {
  Color,
  TagVariant,
  TagRounded,
  SelectionMode,
} from "../types/prop.type";

type TagContext = {
  color?: Color;
  variant?: TagVariant;
  rounded?: TagRounded;
};

const ColorContext = createContext<TagContext>({
  color: "default",
  variant: "default",
  rounded: "default",
});

const tagStyles = tv({
  extend: focusRing,
  base: "text-[--text] border-[--border] hover:border-[--borderHover] transition cursor-default text-xs px-3 py-[6px] flex items-center max-w-fit gap-1",
  variants: {
    color: {
      default: [
        "[--bgSelected:hsl(var(--hok-default-500))]",
        "[--bg:hsl(var(--hok-default-100))]",
        "[--text:hsl(var(--hok-default-600))]",
        "[--border:hsl(var(--hok-default-200))]",
        "[--borderHover:hsl(var(--hok-default-300))]",
      ],
      primary: [
        "[--bgSelected:hsl(var(--hok-primary-500))]",
        "[--bg:hsl(var(--hok-primary-100))]",
        "[--text:hsl(var(--hok-primary-600))]",
        "[--border:hsl(var(--hok-primary-200))]",
        "[--borderHover:hsl(var(--hok-primary-300))]",
      ],
      secondary: [
        "[--bgSelected:hsl(var(--hok-secondary-500))]",
        "[--bg:hsl(var(--hok-secondary-100))]",
        "[--text:hsl(var(--hok-secondary-600))]",
        "[--border:hsl(var(--hok-secondary-200))]",
        "[--borderHover:hsl(var(--hok-secondary-300))]",
      ],
      success: [
        "[--bgSelected:hsl(var(--hok-success-500))]",
        "[--bg:hsl(var(--hok-success-100))]",
        "[--text:hsl(var(--hok-success-600))]",
        "[--border:hsl(var(--hok-success-200))]",
        "[--borderHover:hsl(var(--hok-success-300))]",
      ],
      danger: [
        "[--bgSelected:hsl(var(--hok-danger-500))]",
        "[--bg:hsl(var(--hok-danger-100))]",
        "[--text:hsl(var(--hok-danger-600))]",
        "[--border:hsl(var(--hok-danger-200))]",
        "[--borderHover:hsl(var(--hok-danger-300))]",
      ],
      warning: [
        "[--bgSelected:hsl(var(--hok-warning-500))]",
        "[--bg:hsl(var(--hok-warning-100))]",
        "[--text:hsl(var(--hok-warning-600))]",
        "[--border:hsl(var(--hok-warning-200))]",
        "[--borderHover:hsl(var(--hok-warning-300))]",
      ],
      info: [
        "[--bgSelected:hsl(var(--hok-info-500))]",
        "[--bg:hsl(var(--hok-info-100))]",
        "[--text:hsl(var(--hok-info-600))]",
        "[--border:hsl(var(--hok-info-200))]",
        "[--borderHover:hsl(var(--hok-info-300))]",
      ],
    },
    allowsRemoving: {
      true: "pr-1",
    },
    rounded: {
      default: "rounded-sm",
      full: "rounded-full",
    },
    variant: {
      default: "border-[1.5px] bg-[--bg]",
      bordered: "border-[1.5px] bg-tranparent",
      flat: "border-0 bg-[--border] hover:bg-[--borderHover]",
    },
    isSelected: {
      true: "bg-[--bgSelected] text-white border-transparent forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-color-adjust-none",
    },
    isDisabled: {
      true: "bg-gray-100 text-gray-300 forced-colors:text-[GrayText]",
    },
  },
  defaultVariants: {
    isSelected: false,
    color: "default",
    rounded: "default",
    variant: "default",
  },
});

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, "children" | "onRemove" | "selectionMode">,
    Pick<TagListProps<T>, "children" | "renderEmptyState"> {
  color?: Color;
  label?: string;
  description?: string;
  errorMessage?: string;
  variant?: TagVariant;
  rounded?: TagRounded;
  items?: T[];
  selectionMode?: SelectionMode;
  onRemove?: (keys: string[]) => void;
}

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
      <Label>{label}</Label>
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
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaTagGroup>
  );
}

const removeButtonStyles = tv({
  extend: focusRing,
  base: "cursor-default rounded-full transition-[background-color] p-0.5 flex items-center justify-center",
  variants: {
    color: {
      default: "hover:bg-default-300 pressed:bg-default-400",
      primary: "hover:bg-primary-300 pressed:bg-primary-400",
      secondary: "hover:bg-secondary-300 pressed:bg-secondary-400",
      success: "hover:bg-success-300 pressed:bg-success-400",
      danger: "hover:bg-danger-300 pressed:bg-danger-400",
      warning: "hover:bg-warning-300 pressed:bg-warning-400",
      info: "hover:bg-info-300 pressed:bg-info-400",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export type TagItemProps = AriaTagProps & TagContext;

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

export type ChipProps = TagItemProps & {
  label?: string;
  description?: string;
  errorMessage?: string;
};

export function Chip({
  children,
  label,
  description,
  errorMessage,
  ...props
}: ChipProps) {
  const textValue = typeof children === "string" ? children : "";
  return (
    <AriaTagGroup
      aria-label={label}
      className="flex flex-col justify-center gap-1"
    >
      <Label>{label}</Label>
      <TagList>
        <AriaTag
          {...props}
          textValue={textValue}
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
          {textValue}
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
