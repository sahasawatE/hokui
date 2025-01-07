import type { StoryObj } from "@storybook/react";
import { DateField } from "../components/DateField";
declare const meta: {
    title: string;
    component: typeof DateField;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
