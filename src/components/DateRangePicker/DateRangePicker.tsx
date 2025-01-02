import { CalendarIcon } from "lucide-react";
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import { DateInput } from "../DateField";
import { Dialog } from "../Dialog";
import { Description, FieldError, FieldGroup, Label } from "../Field";
import { RangeCalendar } from "../RangeCalendar";
import { composeTailwindRenderProps } from "../utils";
import type { Color, Rounded, InputVariant } from "../types/prop.type";

type customProps = {
  color?: Color;
  rounded?: Rounded;
  variant?: InputVariant;
};

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T>,
    customProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
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
        rounded={props.rounded}
        variant={props.variant}
        className="min-w-[208px] w-auto"
      >
        <DateInput
          color={props.color}
          slot="start"
          className="px-2 py-1.5 text-sm"
        />
        <span
          aria-hidden="true"
          className="text-gray-800 forced-colors:text-[ButtonText] group-disabled:text-gray-200 group-disabled:forced-colors:text-[GrayText]"
        >
          ~
        </span>
        <DateInput
          color={props.color}
          slot="end"
          className="flex-1 px-2 py-1.5 text-sm"
        />
        <Dialog
          activator={
            <div className="pr-2">
              <CalendarIcon
                aria-hidden
                className="w-4 h-4 text-gray-600 forced-colors:text-[ButtonText] group-disabled:text-gray-200 forced-colors:group-disabled:text-[GrayText]"
              />
            </div>
          }
        >
          <RangeCalendar color={props.color} />
        </Dialog>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateRangePicker>
  );
}
