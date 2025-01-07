import type { StoryObj } from "@storybook/react";
import { ComboBox } from "../components/ComboBox";
declare const meta: {
    title: string;
    component: typeof ComboBox;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
