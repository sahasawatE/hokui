import { SearchIcon, XIcon } from "lucide-react";
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Button } from "../Button";
import { Description, FieldError, FieldGroup, Input, Label } from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomProps = {
  color?: Color;
  variant?: InputVariant;
  rounded?: Rounded;
};

export interface SearchFieldProps extends AriaSearchFieldProps, CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function SearchField({
  label,
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1 min-w-[40px]",
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        variant={props.variant}
        rounded={props.rounded}
        color={props.color}
      >
        <SearchIcon
          aria-hidden
          className="w-4 h-4 ml-2 text-primary forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
        />
        <Input className="[&::-webkit-search-cancel-button]:hidden" />
        <Button variant="icon" className="mr-1 w-6 group-empty:invisible">
          <XIcon aria-hidden className="w-4 h-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}
