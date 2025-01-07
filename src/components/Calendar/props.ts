import {
  CalendarProps as AriaCalendarProps,
  DateValue,
} from "react-aria-components";
import type { Color } from "../types/prop.type";

type customProps = {
  color?: Color;
};

export interface CalendarProps<T extends DateValue = DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration">,
    customProps {
  errorMessage?: string;
}
