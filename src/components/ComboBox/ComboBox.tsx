import { ChevronDown } from "lucide-react";
import React from "react";
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label } from "../Field";
import { Button } from "../Button";
import {
  DropdownItem,
  DropdownSection,
  ListBox,
  DropdownSectionProps,
} from "../ListBox";
import { Popover } from "../Popover";
import { composeTailwindRenderProps } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

export interface ComboBoxProps<
  T extends { [k: string]: any; key: string; title: string },
> extends Omit<AriaComboBoxProps<T>, "children" | "onSelectionChange"> {
  label?: string;
  placeholder?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  color?: Color;
  rounded?: Rounded;
  elementType?: React.JSXElementConstructor<any> | React.ElementType;
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
        elementType={props.elementType}
        activator={(btnProps) => (
          <div ref={btnProps.ref}>
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
              <Input name={props.name} placeholder={props.placeholder} />
              <Button
                {...btnProps.props}
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
          </div>
        )}
        className="w-56"
      >
        <ListBox
          items={items}
          color={props.color}
          selectionMode="single"
          className="border-0 max-h-60 overflow-y-scroll overflow-x-visible no-scrollbar"
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
