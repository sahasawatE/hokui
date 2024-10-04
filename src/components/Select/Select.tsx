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
  base: "flex items-center text-start gap-4 w-full cursor-default border border-black/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pl-3 pr-2 py-2 transition bg-gray-50",
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
        "[--c:var(--hok-default-200)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      primary:
        "[--c:var(--hok-primary-100)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      secondary:
        "[--c:var(--hok-secondary-100)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      success:
        "[--c:var(--hok-success-300)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      danger:
        "[--c:var(--hok-danger-300)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      warning:
        "[--c:var(--hok-warning-300)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
      info: "[--c:var(--hok-warning-300)] [--bgColor:hsl(var(--c))] [--bgColorHover:hsl(var(--c)/0.2)] [--bgColorPressed:hsl(var(--c)/0.3)] [--bgColorFlat:hsl(var(--c)/0.8)]",
    },
    variant: {
      bordered:
        "bg-white border-2 border-[--bgColor] hover:border-[--bgColorPressed] pressed:border-[hsl(var(--c))]",
      underlined: "",
      flat: "border-0 bg-[--bgColorFlat] pressed:bg-[--bgColorPressed] group-invalid:border-red-600",
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
      {label && (
        <Label>
          {label}
          {props.isRequired && <span className="text-danger">*</span>}
        </Label>
      )}
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
