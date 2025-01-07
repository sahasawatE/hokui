import type { StoryObj } from "@storybook/react";
import { SearchField } from "../components/SearchField";
declare const meta: {
    title: string;
    component: typeof SearchField;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        label: string;
    };
    argTypes: {
        description: {
            type: "string";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
