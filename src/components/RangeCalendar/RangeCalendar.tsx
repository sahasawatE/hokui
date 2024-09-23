import React from "react";
import {
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { CalendarGridHeader, CalendarHeader } from "../Calendar";
import { focusRing } from "../utils";
import type { Color } from "../types/prop.type";

type customProps = {
  color?: Color;
};

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<AriaRangeCalendarProps<T>, "visibleDuration">,
    customProps {
  errorMessage?: string;
}

const cell = tv({
  extend: focusRing,
  base: "w-full h-full flex items-center justify-center rounded forced-color-adjust-none text-zinc-900",
  variants: {
    selectionState: {
      none: "group-hover:bg-gray-100 group-pressed:bg-gray-200",
      middle: [
        "group-hover:bg-[--hoverColor] forced-colors:group-hover:bg-[Highlight]",
        "group-invalid:group-hover:bg-red-200 forced-colors:group-invalid:group-hover:bg-[Mark]",
        "group-pressed:bg-[--pressedColor] forced-colors:group-pressed:bg-[Highlight] forced-colors:text-[HighlightText]",
        "group-invalid:group-pressed:bg-red-300 forced-colors:group-invalid:group-pressed:bg-[Mark]",
      ],
      cap: "bg-[--selectedColor] group-invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:group-invalid:bg-[Mark] text-white forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
    color: {
      default:
        "[--c:var(--hok-default-400)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      primary:
        "[--c:var(--hok-primary-400)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      secondary:
        "[--c:var(--hok-secondary-500)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      success:
        "[--c:var(--hok-success-500)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      danger:
        "[--c:var(--hok-danger-500)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      warning:
        "[--c:var(--hok-warning-500)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
      info: "[--c:var(--hok-info-500)] [--selectedColor:hsl(var(--c))] [--hoverColor:hsl(var(--c)/0.3)] [--pressedColor:hsl(var(--c)/0.5)] [--midColor:hsl(var(--c)/0.1)]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const calendarCell = tv({
  base: "group w-9 h-9 text-sm outline outline-0 cursor-default outside-month:text-gray-300 selected:bg-[--midColor] forced-colors:selected:bg-[Highlight] invalid:selected:bg-red-100 forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s selection-start:rounded-s [td:last-child_&]:rounded-e selection-end:rounded-e",
  variants: {
    color: {
      default: "[--c:var(--hok-default-400)] [--midColor:hsl(var(--c)/0.2)]",
      primary: "[--c:var(--hok-primary-400)] [--midColor:hsl(var(--c)/0.2)]",
      secondary:
        "[--c:var(--hok-secondary-500)] [--midColor:hsl(var(--c)/0.2)]",
      success: "[--c:var(--hok-success-500)] [--midColor:hsl(var(--c)/0.2)]",
      danger: "[--c:var(--hok-danger-500)] [--midColor:hsl(var(--c)/0.2)]",
      warning: "[--c:var(--hok-warning-500)] [--midColor:hsl(var(--c)/0.2)]",
      info: "[--c:var(--hok-info-500)] [--midColor:hsl(var(--c)/0.2)]",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export function RangeCalendar<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  return (
    <AriaRangeCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid className="[&_td]:px-0">
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              date={date}
              className={() => calendarCell({ color: props.color })}
            >
              {({
                formattedDate,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isFocusVisible,
                isDisabled,
              }) => (
                <span
                  className={cell({
                    selectionState:
                      isSelected && (isSelectionStart || isSelectionEnd)
                        ? "cap"
                        : isSelected
                        ? "middle"
                        : "none",
                    isDisabled,
                    isFocusVisible,
                    color: props.color,
                  })}
                >
                  {formattedDate}
                </span>
              )}
            </CalendarCell>
          )}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  );
}
