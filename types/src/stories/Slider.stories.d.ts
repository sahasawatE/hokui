import type { StoryObj } from "@storybook/react";
import { Slider } from "../components/Slider";
declare const meta: {
    title: string;
    component: typeof Slider;
    parameters: {
        layout: string;
    };
    args: {};
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const VerticalSlider: Story;
