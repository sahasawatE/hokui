import { ChevronDown } from "lucide-react";
import React from "react";
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components";
import { Button } from "../Button";
import { Description, FieldError, FieldGroup, Input, Label } from "../Field";
import {
  DropdownItem,
  DropdownSection,
  ListBox,
  DropdownSectionProps,
} from "../ListBox/ListBox";
import { Popover } from "../Popover";
import { composeTailwindRenderProps } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

export interface ComboBoxProps<
  T extends { [k: string]: any; key: string; title: string },
> extends Omit<AriaComboBoxProps<T>, "children" | "onSelectionChange"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
  children?: (item: T) => React.ReactNode;
  onSelectionChange?: (key: string) => void;
}

export function ComboBox<
  T extends { [k: string]: any; key: string; title: string },
>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
      onSelectionChange={(e) => {
        if (props.onSelectionChange) {
          const k = String(e);
          props.onSelectionChange(k);
        }
      }}
    >
      <Popover
        activator={() => (
          <>
            <Label>{label}</Label>
            <FieldGroup
              color={props.color}
              variant={props.variant}
              rounded={props.rounded}
            >
              <Input name={props.name} placeholder={props.placeholder} />
              <Button
                variant="icon"
                size="sm"
                className="mr-1"
                rounded={props.rounded === "full" ? "full" : "sm"}
              >
                <ChevronDown aria-hidden className="w-4 h-4" />
              </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
          </>
        )}
        className="w-56"
      >
        <ListBox
          items={items}
          color={props.color}
          selectionMode="single"
          className="border-0"
        >
          {children
            ? children
            : (e) => <ComboBoxItem key={e.key}>{e.title}</ComboBoxItem>}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export function ComboBoxSection<
  T extends { [k: string]: any; key: string; title: string },
>(props: DropdownSectionProps<T>) {
  return <DropdownSection {...props} />;
}
