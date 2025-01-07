import { ChevronDown, ChevronUp } from "lucide-react";
import { NumberField as AriaNumberField } from "react-aria-components";
import { FieldGroup, Input, fieldBorderStyles } from "../../Field";
import { StepperButton } from "./StepperButton";
import { composeTailwindRenderProps } from "../../utils";
import { WithLabel } from "../../../helper/WithLable";
import type { NumberFieldProps } from "../props";

export function NumberField({
  label,
  description,
  errorMessage,
  isRequired,
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
      <WithLabel
        label={label}
        isRequired={isRequired}
        description={description}
        errorMessage={errorMessage}
      >
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
      </WithLabel>
    </AriaNumberField>
  );
}
