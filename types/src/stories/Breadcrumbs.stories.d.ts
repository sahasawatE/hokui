import type { StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/Breadcrumbs";
declare const meta: {
    title: string;
    component: typeof Breadcrumbs;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
