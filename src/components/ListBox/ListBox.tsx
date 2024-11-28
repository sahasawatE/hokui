import { Check } from "lucide-react";
import React, { createContext, useContext } from "react";
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxProps as AriaListBoxProps,
  Collection,
  Header,
  ListBoxItemProps as AriaListBoxItemProps,
  Section,
  SectionProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type CustomProps = {
  color?: Color;
};

const listBoxContext = createContext<CustomProps>({ color: "default" });

export interface ListBoxProps<T>
  extends Omit<AriaListBoxProps<T>, "layout" | "orientation" | "children">,
    CustomProps {
  children?: (item: T) => React.ReactNode;
  onSelect?: (value: string[]) => void;
}

export type ListBoxItemProps = AriaListBoxItemProps;

export function ListBox<
  T extends { [k: string]: any; key: string; title: string },
>({ children, ...props }: ListBoxProps<T>) {
  return (
    <listBoxContext.Provider value={{ color: props.color }}>
      <AriaListBox
        {...props}
        className={composeTailwindRenderProps(
          props.className,
          "outline-0 p-1 border border-gray-300 rounded-lg",
        )}
        onSelectionChange={(e) =>
          props.onSelect
            ? props.onSelect(Array.from(e).map((f) => String(f)))
            : undefined
        }
      >
        {children
          ? children
          : (e) => <ListBoxItem key={e.key}>{e.title}</ListBoxItem>}
      </AriaListBox>
    </listBoxContext.Provider>
  );
}

export const itemStyles = tv({
  extend: focusRing,
  base: "group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-[--text] hover:bg-[--bgHover] -outline-offset-2",
      true: "bg-[--bg] text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] [&:has(+[data-selected])]:rounded-b-none [&+[data-selected]]:rounded-t-none -outline-offset-4 outline-white forced-colors:outline-[HighlightText]",
    },
    isDisabled: {
      true: "text-slate-300 forced-colors:text-[GrayText]",
    },
    color: {
      default:
        "[--bg:hsl(var(--hok-default-300))] [--bgHover:hsl(var(--hok-default-200))] [--text:hsl(var(--hok-default-500))]",
      primary:
        "[--bg:hsl(var(--hok-primary-300))] [--bgHover:hsl(var(--hok-primary-100))] [--text:hsl(var(--hok-primary-500))]",
      secondary:
        "[--bg:hsl(var(--hok-secondary-300))] [--bgHover:hsl(var(--hok-secondary-100))] [--text:hsl(var(--hok-secondary-500))]",
      success:
        "[--bg:hsl(var(--hok-success-500))] [--bgHover:hsl(var(--hok-success-300))] [--text:hsl(var(--hok-success-600))]",
      warning:
        "[--bg:hsl(var(--hok-warning-500))] [--bgHover:hsl(var(--hok-warning-300))] [--text:hsl(var(--hok-warning-500))]",
      danger:
        "[--bg:hsl(var(--hok-danger-500))] [--bgHover:hsl(var(--hok-danger-300))] [--text:hsl(var(--hok-danger-500))]",
      info: "[--bg:hsl(var(--hok-info-400))] [--bgHover:hsl(var(--hok-info-100))] [--text:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export function ListBoxItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  const ctx = useContext(listBoxContext);
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={(renderProps) =>
        itemStyles({
          ...renderProps,
          color: ctx.color,
        })
      }
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <div className="absolute left-4 right-4 bottom-0 h-px bg-white/20 forced-colors:bg-[HighlightText] hidden [.group[data-selected]:has(+[data-selected])_&]:block" />
        </>
      ))}
    </AriaListBoxItem>
  );
}

export const dropdownItemStyles = tv({
  base: "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded outline outline-0 text-sm forced-color-adjust-none",
  variants: {
    isDisabled: {
      false: "text-gray-900",
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
    isFocused: {
      true: "bg-[--bg] text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
    color: {
      default: "[--bg:hsl(var(--hok-default-300))]",
      primary: "[--bg:hsl(var(--hok-primary-300))]",
      secondary: "[--bg:hsl(var(--hok-secondary-300))]",
      success: "[--bg:hsl(var(--hok-success-500))]",
      warning: "[--bg:hsl(var(--hok-warning-500))]",
      danger: "[--bg:hsl(var(--hok-danger-500))]",
      info: "[--bg:hsl(var(--hok-info-400))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
  compoundVariants: [
    {
      isFocused: false,
      isOpen: true,
      className: "bg-gray-100",
    },
  ],
});

export function DropdownItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  const ctx = useContext(listBoxContext);
  return (
    <AriaListBoxItem
      {...props}
      textValue={textValue}
      className={(renderProps) =>
        dropdownItemStyles({ ...renderProps, color: ctx.color })
      }
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          <span className="flex items-center flex-1 gap-2 font-normal truncate group-selected:font-semibold">
            {children}
          </span>
          <span className="flex items-center w-5">
            {isSelected && <Check className="w-4 h-4" />}
          </span>
        </>
      ))}
    </AriaListBoxItem>
  );
}

export interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string;
}

export function DropdownSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return (
    <Section className="first:-mt-[5px] after:content-[''] after:block after:h-[5px]">
      <Header className="text-sm font-semibold text-gray-500 px-4 py-1 truncate sticky -top-[5px] -mt-px -mx-1 z-10 bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 border-y [&+*]:mt-1">
        {props.title}
      </Header>
      <Collection items={props.items}>{props.children}</Collection>
    </Section>
  );
}
