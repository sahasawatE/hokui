import type { StoryObj } from "@storybook/react";
import { DateRangePicker } from "../components/DateRangePicker";
declare const meta: {
    title: string;
    component: typeof DateRangePicker;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
