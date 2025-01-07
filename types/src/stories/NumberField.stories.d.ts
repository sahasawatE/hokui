import type { StoryObj } from "@storybook/react";
import { NumberField } from "../components/NumberField";
declare const meta: {
    title: string;
    component: typeof NumberField;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        label: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const InvalidState: Story;
