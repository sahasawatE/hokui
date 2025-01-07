import { TextField as AriaTextField } from "react-aria-components";
import { FieldGroup, Input } from "../../Field";
import { composeTailwindRenderProps } from "../../utils";
import type { TextFieldProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function TextField({
  label,
  description,
  errorMessage,
  isRequired,
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
          <Input name={props.name} placeholder={props.placeholder} />
          {props.endContent && (
            <div className="text-gray-400 p-1 select-none">
              {props.endContent}
            </div>
          )}
        </FieldGroup>
      </WithLabel>
    </AriaTextField>
  );
}
