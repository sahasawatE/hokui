import type { StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";
declare const meta: {
    title: string;
    component: typeof DatePicker;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
