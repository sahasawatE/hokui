import type { StoryObj } from "@storybook/react";
import { RadioGroup } from "../components/RadioGroup";
declare const meta: {
    title: string;
    component: typeof RadioGroup;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        options: {
            value: string;
            title: string;
        }[];
        label: string;
    };
    argTypes: {
        isRequired: {
            control: "boolean";
            defaultValue: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomItems: Story;
export declare const InvalidState: Story;
