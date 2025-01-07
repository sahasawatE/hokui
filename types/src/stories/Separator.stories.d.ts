import type { StoryObj } from "@storybook/react";
import { Separator } from "../components/Separator";
declare const meta: {
    title: string;
    component: typeof Separator;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        orientation: "horizontal";
    };
    argTypes: {
        orientation: {
            type: "string";
            control: "radio";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
