import { ChevronDown, ChevronUp } from "lucide-react";
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult,
} from "react-aria-components";
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldBorderStyles,
} from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color, Rounded, InputVariant } from "../types/prop.type";

type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
  hideSpinButton?: boolean;
};

export interface NumberFieldProps extends AriaNumberFieldProps, customProps {
  label?: string;
  description?: string;
  placeholder?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function NumberField({
  label,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      <Label>
        {label}
        {props.isRequired && <span className="text-danger">*</span>}
      </Label>
      <FieldGroup
        color={props.color}
        rounded={props.rounded}
        variant={props.variant}
      >
        {(renderProps) => (
          <>
            <Input name={props.name} placeholder={props.placeholder} />
            {!!!props.hideSpinButton && (
              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  class: "flex flex-col border-s-2",
                  rounded: "none",
                  variant: "underlined",
                  color: props.color,
                })}
              >
                <StepperButton slot="increment">
                  <ChevronUp aria-hidden className="w-4 h-4" />
                </StepperButton>
                <div
                  className={fieldBorderStyles({
                    ...renderProps,
                    class: "border-b-2",
                    rounded: "none",
                    variant: "underlined",
                    color: props.color,
                  })}
                />
                <StepperButton slot="decrement">
                  <ChevronDown aria-hidden className="w-4 h-4" />
                </StepperButton>
              </div>
            )}
          </>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="px-0.5 cursor-default text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
    />
  );
}
