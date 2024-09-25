import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { Description, FieldError, FieldGroup, Input, Label } from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color, InputVariant, Rounded } from "../types/prop.type";

type CustomProps = {
  color?: Color;
  variant?: InputVariant;
  rounded?: Rounded;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export interface TextFieldProps extends AriaTextFieldProps, CustomProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      {label && (
        <Label>
          {label} {props.isRequired && <span className="text-danger">*</span>}
        </Label>
      )}
      <FieldGroup
        color={props.color}
        variant={props.variant}
        rounded={props.rounded}
      >
        {props.startContent && (
          <div className="text-gray-400 p-1 select-none">
            {props.startContent}
          </div>
        )}
        <Input />
        {props.endContent && (
          <div className="text-gray-400 p-1 select-none">
            {props.endContent}
          </div>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
