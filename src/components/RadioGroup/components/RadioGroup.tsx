import { RadioGroup as RACRadioGroup } from "react-aria-components";
import { Radio } from "./Radio";
import { composeTailwindRenderProps } from "../../utils";
import { GroupContext } from "./context";
import type { RadioGroupProps } from "../props";
import { WithLabel } from "../../../helper/WithLable";

export function RadioGroup<
  T extends { [key: string]: any; value: string; title: string },
>(props: RadioGroupProps<T>) {
  return (
    <RACRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-2",
      )}
    >
      <WithLabel
        label={props.label}
        isRequired={props.isRequired}
        description={props.description}
        errorMessage={props.errorMessage}
      >
        <GroupContext.Provider value={{ color: props.color }}>
          <div className="flex group-orientation-vertical:flex-col gap-2 group-orientation-horizontal:gap-4">
            {props.options.map((e) =>
              props.children ? (
                props.children(e)
              ) : (
                <Radio key={e.value} value={e.value}>
                  {e.title}
                </Radio>
              ),
            )}
          </div>
        </GroupContext.Provider>
      </WithLabel>
    </RACRadioGroup>
  );
}
