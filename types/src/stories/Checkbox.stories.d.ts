import type { StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox";
declare const meta: {
    title: string;
    component: typeof Checkbox;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Group: Story;
