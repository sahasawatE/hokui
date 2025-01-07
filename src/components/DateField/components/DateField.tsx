import { DateField as AriaDateField, DateValue } from "react-aria-components";
import { composeTailwindRenderProps } from "../../utils";
import type { DateFieldProps } from "../props";
import { DateInput } from "./DateInput";

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-1",
      )}
    >
      <DateInput color={props.color} />
    </AriaDateField>
  );
}
