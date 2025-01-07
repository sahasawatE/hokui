import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../components/Menu";

const list = [
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
];

const meta = {
  title: "HokUi/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: list,
  },
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top end",
        "top left",
        "top right",
        "top start",
        "bottom",
        "bottom end",
        "bottom left",
        "bottom right",
        "bottom start",
        "start",
        "start bottom",
        "start top",
        "end",
        "end bottom",
        "end top",
        "left",
        "left bottom",
        "left top",
        "right",
        "right bottom",
        "right top",
      ],
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Menu {...props} label="Open menu"></Menu>;
  },
  args: {
    placement: "bottom",
    activator: "this is custome button",
  },
};

export const PopoverPlacement: Story = {
  args: {
    placement: "top",
    label: "Open menu",
    activator: "this is custome button",
  },
};
