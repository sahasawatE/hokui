import { DateInput as AriaDateInput, DateSegment } from "react-aria-components";
import { fieldGroupStyles } from "../../Field";
import { segmentStyles } from "../style";
import type { DateInputProps } from "../props";

export function DateInput(props: DateInputProps) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: "flex min-w-[150px] px-2 py-1.5 text-sm",
          color: props.color,
        })
      }
      {...props}
    >
      {(segment) => (
        <DateSegment
          segment={segment}
          className={(renderProps) =>
            segmentStyles({
              ...renderProps,
              color: props.color,
            })
          }
        />
      )}
    </AriaDateInput>
  );
}
