import type { StoryObj } from "@storybook/react";
import { GridList } from "../components/GridList";
declare const meta: {
    title: string;
    component: typeof GridList;
    parameters: {
        layout: string;
    };
    tags: string[];
    render: (props: import("../components/GridList").GridListProps<{
        [k: string]: any;
        key: string;
        title: string;
    }>) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        selectionMode: {
            control: "radio";
            options: string[];
        };
        allowDragandDrop: {
            control: "boolean";
            defaultValue: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DragAndDrop: Story;
export declare const WithSelection: Story;
export declare const SelectionAndDragging: Story;
