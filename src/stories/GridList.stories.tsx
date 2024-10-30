import type { Meta, StoryObj } from "@storybook/react";
import { GridList } from "../components/GridList";
import { useListData } from "react-stately";

const meta = {
  title: "HokUi/GridList",
  component: GridList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (props) => {
    const list = useListData({
      initialItems: [
        {
          a: "a123123",
          key: "b1",
          title: "hok b1",
          value: "b11",
        },
        {
          a: "b123123",
          key: "b2",
          title: "hok b2",
          value: "b22",
        },
        {
          a: "c123123",
          key: "b3",
          title: "hok b3",
          value: "b33",
        },
      ],
    });

    return <GridList {...props} items={list}></GridList>;
  },
  argTypes: {
    selectionMode: {
      control: "radio",
      options: ["multiple", "single", "none"],
    },
    allowDragandDrop: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof GridList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DragAndDrop: Story = {
  args: {
    allowDragandDrop: true,
  },
};

export const WithSelection: Story = {
  args: {
    selectionMode: "multiple",
  },
};

export const SelectionAndDragging: Story = {
  args: {
    selectionMode: "multiple",
    allowDragandDrop: true,
  },
};
