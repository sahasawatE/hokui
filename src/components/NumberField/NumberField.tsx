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
  placeholder?: string;
  description?: string;
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
            {!props.hideSpinButton && (
              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  class: "flex flex-col",
                  color: props.color,
                })}
              >
                <StepperButton slot="increment">
                  <ChevronUp
                    aria-hidden
                    className="w-4 h-4 text-gray-600 forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
                  />
                </StepperButton>
                <StepperButton slot="decrement">
                  <ChevronDown
                    aria-hidden
                    className="w-4 h-4 text-gray-600 forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
                  />
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
      className="px-0.5 cursor-default text-default pressed:bg-default-100 group-disabled:text-default-200 forced-colors:group-disabled:text-default"
    />
  );
}
