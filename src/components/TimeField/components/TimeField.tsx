import { TimeField as AriaTimeField, TimeValue } from "react-aria-components";
import { DateInput } from "../../DateField";
import { FieldGroup } from "../../Field";
import type { TimeFieldProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  isRequired,
  ...props
}: TimeFieldProps<T>) {
  return (
    <AriaTimeField {...props}>
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
      </WithLabel>
    </AriaTimeField>
  );
}
