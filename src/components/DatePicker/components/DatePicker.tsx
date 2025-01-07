import { CalendarIcon } from "lucide-react";
import { DatePicker as AriaDatePicker, DateValue } from "react-aria-components";
import { Calendar } from "../../Calendar";
import { DateInput } from "../../DateField";
import { Dialog } from "../../Dialog";
import { FieldGroup } from "../../Field";
import { composeTailwindRenderProps } from "../../utils";
import type { DatePickerProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  isRequired,
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
            className="flex-1 min-w-[150px] px-2 py-1.5 text-sm"
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
            <Calendar color={props.color} />
          </Dialog>
        </FieldGroup>
      </WithLabel>
    </AriaDatePicker>
  );
}
