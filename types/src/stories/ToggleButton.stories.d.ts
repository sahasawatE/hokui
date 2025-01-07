import type { StoryObj } from "@storybook/react";
import { ToggleButton } from "../components/ToggleButton";
declare const meta: {
    title: string;
    component: typeof ToggleButton;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        children: string;
        isDisabled: false;
    };
    argTypes: {
        variant: {
            name: string;
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
