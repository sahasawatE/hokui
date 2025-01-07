import type { StoryObj } from "@storybook/react";
import { EventCalendar } from "../components/EventCalendar";
import { CalendarEvent } from "../components/types/prop.type";
declare const meta: {
    title: string;
    component: typeof EventCalendar;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        events: CalendarEvent[];
        eventColors: {
            type: string;
            color: string;
            textColor: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
