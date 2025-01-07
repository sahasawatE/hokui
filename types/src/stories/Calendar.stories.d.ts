import type { StoryObj } from "@storybook/react";
import { Calendar } from "../components/Calendar";
declare const meta: {
    title: string;
    component: typeof Calendar;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
