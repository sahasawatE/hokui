import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { composeTailwindRenderProps } from "../../utils";
import { WithLabel } from "../../../helper/WithLable";
import type { CheckboxGroupProps } from "../props";

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2",
      )}
    >
      <WithLabel
        label={props.label}
        isRequired={props.isRequired}
        description={props.description}
        errorMessage={props.errorMessage}
      >
        {props.children}
      </WithLabel>
    </AriaCheckboxGroup>
  );
}
