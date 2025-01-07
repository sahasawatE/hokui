import { CalendarIcon } from "lucide-react";
import {
  DateRangePicker as AriaDateRangePicker,
  DateValue,
} from "react-aria-components";
import { DateInput } from "../../DateField";
import { Dialog } from "../../Dialog";
import { FieldGroup } from "../../Field";
import { RangeCalendar } from "../../RangeCalendar";
import { composeTailwindRenderProps } from "../../utils";
import type { DateRangePickerProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  isRequired,
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
      <WithLabel
        label={label}
        isRequired={isRequired}
        description={description}
        errorMessage={errorMessage}
      >
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
      </WithLabel>
    </AriaDateRangePicker>
  );
}
