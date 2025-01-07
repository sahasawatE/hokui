import type { StoryObj } from "@storybook/react";
import { Menu } from "../components/Menu";
declare const meta: {
    title: string;
    component: typeof Menu;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        items: {
            a: string;
            key: string;
            title: string;
            value: string;
        }[];
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
export declare const PopoverPlacement: Story;
