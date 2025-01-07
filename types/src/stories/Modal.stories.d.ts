import type { StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
declare const meta: {
    title: string;
    component: typeof Modal;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        title: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSlotName: Story;
