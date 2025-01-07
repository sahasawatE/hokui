import type { StoryObj } from "@storybook/react";
import { Link } from "../components/Link";
declare const meta: {
    title: string;
    component: typeof Link;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        children: string;
        href: string;
        target: "_blank";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
