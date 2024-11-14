import React from "react";
import {
  TimeField as AriaTimeField,
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components";
import { DateInput } from "../DateField";
import { Description, FieldError, FieldGroup, Label } from "../Field";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomProps = {
  variant?: InputVariant;
  color?: Color;
  rounded?: Rounded;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export interface TimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T>,
    CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField {...props}>
      <Label>
        {label}
        {props.isRequired ?? <span className="text-danger">*</span>}
      </Label>
      <FieldGroup
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        color={props.color}
        variant={props.variant}
        rounded={props.rounded}
      >
        {props.startContent && (
          <div className="text-gray-400 p-1 select-none">
            {props.startContent}
          </div>
        )}
        <DateInput color={props.color} />
        {props.endContent && (
          <div className="text-gray-400 p-1 select-none">
            {props.endContent}
          </div>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}
