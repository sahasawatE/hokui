import { ChevronDown } from "lucide-react";
import React from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  // ListBox,
  ListBoxItemProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, fieldBorderStyles, FieldError, Label } from "../Field";
import {
  DropdownItem,
  DropdownSection,
  ListBox,
  type DropdownSectionProps,
} from "../ListBox";
import { Popover } from "../Popover";
import { focusRing } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
import { motion } from "framer-motion";

type customProps<T> = {
  rounded?: Rounded;
  color?: Color;
  variant?: InputVariant;
  onSelect?: (value: T) => void;
};

const buttonStyles = tv({
  extend: focusRing,
  base: "relative flex items-center h-9 text-start gap-4 px-2 w-full min-w-10 cursor-default border border-0 bg-transparent",
  variants: {
    ...fieldBorderStyles.variants,
    isDisabled: {
      false: "text-gray-800",
      true: "text-gray-200 forced-colors:text-gray-200 forced-colors:border-gray-200",
    },
  },
  defaultVariants: {
    variant: "bordered",
    rounded: "md",
    color: "default",
  },
  compoundVariants: [
    {
      isInvalid: true,
      variant: "flat",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "bg-red-200",
    },
    {
      isInvalid: false,
      variant: "flat",
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "bg-[--bgColorFlat]",
    },
    {
      isInvalid: true,
      rounded: ["full", "lg", "md", "none", "sm", "xl"],
      variant: "underlined",
      isFocusWithin: [true, false],
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className: "rounded-none border-red-300 forced-colors:border-red-300",
    },
    {
      isInvalid: false,
      rounded: ["full", "lg", "md", "none", "sm", "xl"],
      variant: "underlined",
      isFocusWithin: [true, false],
      color: [
        "danger",
        "default",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      className:
        "rounded-none border-[--borderColor] forced-colors:border-[--borderColor]",
    },
  ],
});

const underlinedStyle = tv({
  extend: focusRing,
  base: "absolute w-[0px] h-[2px] rounded-full -bottom-[2px] right-1/2 translate-x-1/2 [--lineColor:hsl(var(--c1))] bg-[--lineColor]",
  variants: {
    color: buttonStyles.variants.color,
  },
  defaultVariants: {
    color: "default",
  },
});

const selectStyles = tv({
  extend: focusRing,
  base: "group flex flex-col gap-1 min-w-10",
});

export interface SelectProps<T extends { [k: string]: any; key: string }>
  extends Omit<AriaSelectProps<T>, "children" | "onSelectionChange">,
    customProps<T> {
  label?: string;
  description?: string;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items: Iterable<T>;
  children: (item: T) => React.ReactNode;
}

export function Select<
  T extends { [k: string]: any; key: string; title: string },
>({
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
      className={(renderProps) => selectStyles({ ...renderProps })}
    >
      {(renderProps) => (
        <>
          {label && (
            <Label>
              {label}
              {props.isRequired && <span className="text-danger">*</span>}
            </Label>
          )}
          <Popover
            elementType={props.elementType}
            activator={(btnProps) => (
              <div ref={btnProps.ref}>
                <Button
                  {...btnProps.props}
                  className={(renderBtnProps) =>
                    buttonStyles({
                      ...renderBtnProps,
                      isInvalid: renderProps.isInvalid,
                      rounded: props.rounded,
                      color: props.color,
                      variant: props.variant,
                      isFocusWithin:
                        renderBtnProps.isFocused ||
                        renderProps.isFocused ||
                        renderProps.isOpen,
                    })
                  }
                >
                  <SelectValue className="flex-1 text-sm placeholder-shown:text-gray-400" />
                  <ChevronDown
                    aria-hidden
                    className="w-4 h-4 text-gray-600 forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
                  />
                  {/* underlined style */}
                  {props.variant === "underlined" && (
                    <motion.div
                      animate={
                        renderProps.isFocused
                          ? {
                              width: "100%",
                              opacity: 1,
                            }
                          : {
                              width: "0",
                              transitionEnd: {
                                opacity: 0,
                              },
                            }
                      }
                      transition={{
                        type: "tween",
                        ease: "circInOut",
                      }}
                      className={underlinedStyle({
                        color: props.isInvalid ? "danger" : props.color,
                      })}
                    ></motion.div>
                  )}
                </Button>
                {description && <Description>{description}</Description>}
                <FieldError>{errorMessage}</FieldError>
              </div>
            )}
            className="min-w-[--trigger-width]"
          >
            <ListBox items={items} color={props.color} className="border-0">
              {children}
            </ListBox>
          </Popover>
        </>
      )}
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
