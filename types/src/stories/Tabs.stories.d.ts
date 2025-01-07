import type { StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs";
declare const meta: {
    title: string;
    component: typeof Tabs;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        items: {
            key: string;
            title: string;
        }[];
        children(item: {
            [k: string]: any;
            key: string;
            title: string;
        }): import("react/jsx-runtime").JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomTabItems: Story;
