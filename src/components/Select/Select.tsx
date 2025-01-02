import React, { useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  ListBoxItemProps,
  SelectValue,
  ValidationResult,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, FieldGroup, Label } from "../Field";
import {
  DropdownItem,
  DropdownSection,
  ListBox,
  type DropdownSectionProps,
} from "../ListBox";
import { Popover } from "../Popover";
import { focusRing } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";
import { Button } from "../Button";

type customProps<T> = {
  rounded?: Rounded;
  color?: Color;
  variant?: InputVariant;
  onSelect?: (value: T) => void;
  onClear?: (defaultKey: string | null) => void;
};

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
  children?: (item: T) => React.ReactNode;
  onSelectionChange?: (key: string | null) => void;
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div ref={triggerRef}>
      <AriaSelect
        {...props}
        onSelectionChange={(e) => {
          const i = items as T[];
          const f = i.findLast((j) => j.key === e);
          if (props.onSelect && f) {
            props.onSelect(f);
          }

          if (props.onSelectionChange) {
            props.onSelectionChange(f?.key ?? null);
          }

          setOpen(false);
        }}
        className={(renderProps) => selectStyles({ ...renderProps })}
      >
        {label && (
          <Label>
            {label}
            {props.isRequired && <span className="text-danger">*</span>}
          </Label>
        )}
        <FieldGroup
          isDisabled={props.isDisabled}
          isInvalid={props.isInvalid}
          color={props.color}
          variant={props.variant}
          rounded={props.rounded}
        >
          {(fieldProps) => (
            <div className="flex flex-row w-full justify-between px-2 gap-4">
              <Popover
                isOpen={open}
                triggerRef={triggerRef}
                elementType={props.elementType}
                activator={
                  <div onClick={() => setOpen((prev) => !prev)}>
                    <SelectValue className="flex-1 text-sm placeholder-shown:text-gray-400" />
                  </div>
                }
                className="min-w-[--trigger-width]"
                onOpenChange={setOpen}
              >
                <ListBox
                  items={items}
                  color={props.color}
                  selectionMode="single"
                  className="border-0 max-h-60 overflow-y-scroll overflow-x-visible no-scrollbar"
                >
                  {children
                    ? children
                    : (e) => <SelectItem key={e.key}>{e.title}</SelectItem>}
                </ListBox>
              </Popover>
              <div className="flex flex-row items-center gap-1">
                {!!props.onClear && (
                  <>
                    {(fieldProps.isFocusWithin || props.selectedKey) && (
                      <Button
                        variant="icon"
                        size="sm"
                        rounded="full"
                        color={props.color}
                        onPress={() => {
                          const k =
                            props.defaultSelectedKey !== undefined
                              ? String(props.defaultSelectedKey)
                              : null;
                          props.onClear!(k);
                        }}
                      >
                        <X
                          size={14}
                          style={{ color: `hsl(var(--hok-${props.color}))` }}
                        />
                      </Button>
                    )}
                  </>
                )}
                <ChevronDown
                  aria-hidden
                  className="w-4 h-4 text-gray-600 group-disabled:text-gray-200 cursor-pointer"
                  onClick={() => setOpen((prev) => !prev)}
                />
              </div>
            </div>
          )}
        </FieldGroup>

        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </AriaSelect>
    </div>
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
