import type { StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge";
declare const meta: {
    title: string;
    component: typeof Badge;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        content: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
