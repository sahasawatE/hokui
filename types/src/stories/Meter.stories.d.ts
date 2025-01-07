import type { StoryObj } from "@storybook/react";
import { Meter } from "../components/Meter";
declare const meta: {
    title: string;
    component: typeof Meter;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        label: string;
        value: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
