import type { StoryObj } from "@storybook/react";
import { RangeCalendar } from "../components/RangeCalendar";
import { CalendarDate } from "@internationalized/date";
declare const meta: {
    title: string;
    component: typeof RangeCalendar;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        defaultValue: {
            start: CalendarDate;
            end: CalendarDate;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
