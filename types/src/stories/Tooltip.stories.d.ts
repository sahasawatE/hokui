import type { StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip";
declare const meta: {
    title: string;
    component: typeof Tooltip;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        children: string;
    };
    argTypes: {
        placement: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
