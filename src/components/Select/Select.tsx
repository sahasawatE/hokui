import { ChevronDown } from "lucide-react";
import React from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxItemProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "../Field";
import {
  DropdownItem,
  DropdownSection,
  DropdownSectionProps,
} from "../ListBox/ListBox";
import { Popover } from "../Popover";
import { composeTailwindRenderProps, focusRing } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type customProps<T> = {
  rounded?: Rounded;
  color?: Color;
  variant?: InputVariant;
  onSelect?: (value: T) => void;
};

const styles = tv({
  extend: focusRing,
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pl-3 pr-2 py-2 min-w-[150px] transition bg-gray-50",
  variants: {
    isDisabled: {
      false: "text-gray-800",
      true: "text-gray-200 forced-colors:text-[GrayText] forced-colors:border-[GrayText]",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    color: {
      default:
        "[--c:var(--hok-default-500)] [--bgColor:hsl(var(--c)/0.1)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      primary:
        "[--c:var(--hok-primary-500)] [--bgColor:hsl(var(--c)/0.1)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      secondary:
        "[--c:var(--hok-secondary-500)] [--bgColor:hsl(var(--c)/0.1)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      success:
        "[--c:var(--hok-success-500)] [--bgColor:hsl(var(--c)/0.1)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      danger:
        "[--c:var(--hok-danger-500)] [--bgColor:hsl(var(--c)/0.1)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      warning:
        "[--c:var(--hok-warning-500)] [--bgColor:hsl(var(--c)/0.4)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
      info: "[--c:var(--hok-warning-500)] [--bgColor:hsl(var(--c)/0.4)] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)]",
    },
    variant: {
      bordered:
        "bg-transparent border-2 border-[--bgColor] hover:border-[--bgColorPressed] pressed:border-[hsl(var(--c))]",
      underlined: "",
      flat: "bg-[--bgColor] hover:bg-[--bgColorHover] pressed:bg-[--bgColorPressed] group-invalid:border-red-600 forced-colors:group-invalid:border-[Mark]",
    },
  },
  defaultVariants: {
    rounded: "md",
    color: "default",
    variant: "bordered",
  },
});

export interface SelectProps<T extends { [k: string]: any; key: string }>
  extends Omit<AriaSelectProps<T>, "children">,
    customProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<T extends { [k: string]: any; key: string }>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      onSelectionChange={(e) => {
        const i = items as T[];
        const f = i.findLast((j) => j.key === e);
        if (props.onSelect && f) {
          props.onSelect(f);
        }
      }}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <Popover
        activator={() => (
          <>
            <Button
              className={(renderProps) =>
                styles({
                  ...renderProps,
                  rounded: props.rounded,
                  color: props.color,
                  variant: props.variant,
                })
              }
            >
              <SelectValue className="flex-1 text-sm placeholder-shown:italic" />
              <ChevronDown
                aria-hidden
                className="w-4 h-4 text-gray-600 forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
              />
            </Button>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
          </>
        )}
        className="min-w-[--trigger-width]"
      >
        <ListBox
          items={items}
          className="outline-none p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function SelectSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />;
}
