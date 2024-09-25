import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Calendar as AriaCalendar,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
  useLocale,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Button } from "../Button";
import { focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type customProps = {
  color?: Color;
};

const cellStyles = tv({
  extend: focusRing,
  base: "rounded w-9 h-9 text-sm cursor-default flex items-center justify-center forced-color-adjust-none cursor-pointer",
  variants: {
    isSelected: {
      false: "text-zinc-900 hover:bg-gray-100 pressed:bg-gray-200",
      true: "bg-[--selectedColor] invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
    color: {
      default: "[--selectedColor:hsl(var(--hok-default-400))]",
      primary: "[--selectedColor:hsl(var(--hok-primary-400))]",
      secondary: "[--selectedColor:hsl(var(--hok-secondary-500))]",
      success: "[--selectedColor:hsl(var(--hok-success-500))]",
      danger: "[--selectedColor:hsl(var(--hok-danger-500))]",
      warning: "[--selectedColor:hsl(var(--hok-warning-500))]",
      info: "[--selectedColor:hsl(var(--hok-info-500))]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export interface CalendarProps<T extends DateValue = DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration">,
    customProps {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={(renderProps) =>
                cellStyles({ ...renderProps, color: props.color })
              }
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  );
}

function Header() {
  return (
    <div className="w-full">
      <Heading className="flex-1 font-semibold text-xl text-center mx-2 text-zinc-900" />
    </div>
  );
}

export function CalendarHeader() {
  const { direction } = useLocale();

  return (
    <div className="flex items-center gap-1 pb-4 px-1 w-full">
      <Button variant="icon" slot="previous">
        {direction === "rtl" ? (
          <ChevronRight aria-hidden />
        ) : (
          <ChevronLeft aria-hidden />
        )}
      </Button>
      <Header />
      <Button variant="icon" slot="next">
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden />
        ) : (
          <ChevronRight aria-hidden />
        )}
      </Button>
    </div>
  );
}

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  );
}
