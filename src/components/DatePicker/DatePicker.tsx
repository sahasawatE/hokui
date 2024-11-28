import { CalendarIcon } from "lucide-react";
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { DateInput } from "../DateField";
import { Dialog } from "../Dialog";
import { Description, FieldError, FieldGroup, Label } from "../Field";
import { composeTailwindRenderProps } from "../utils";
import type { Color, Rounded, InputVariant } from "../types/prop.type";

type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
};

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T>,
    customProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      <Dialog
        activator={(btnProp) => (
          <>
            {label && <Label>{label}</Label>}
            <FieldGroup
              color={props.color}
              rounded={props.rounded}
              variant={props.variant}
              className="min-w-[208px] w-auto"
            >
              <DateInput
                color={props.color}
                className="flex-1 min-w-[150px] px-2 py-1.5 text-sm"
              />
              <Button
                {...btnProp.props}
                ref={btnProp.ref}
                variant="icon"
                size="sm"
                rounded="sm"
                className="mr-1"
              >
                <CalendarIcon aria-hidden className="w-4 h-4" />
              </Button>
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
          </>
        )}
      >
        <Calendar color={props.color} />
      </Dialog>
    </AriaDatePicker>
  );
}
