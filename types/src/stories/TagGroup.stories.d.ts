import type { StoryObj } from "@storybook/react";
import { TagGroup } from "../components/TagGroup";
declare const meta: {
    title: string;
    component: typeof TagGroup;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        selectionMode: {
            control: "radio";
            options: string[];
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSelection: Story;
