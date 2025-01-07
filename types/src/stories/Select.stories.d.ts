import type { StoryObj } from "@storybook/react";
import { Select } from "../components/Select";
declare const meta: {
    title: string;
    component: typeof Select;
    parameters: {
        layout: string;
    };
    args: {
        items: {
            key: string;
            title: string;
        }[];
        children: (e: {
            [k: string]: any;
            key: string;
            title: string;
        }) => import("react/jsx-runtime").JSX.Element;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
