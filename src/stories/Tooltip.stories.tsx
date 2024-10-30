import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Tooltip } from "../components/Tooltip";

const meta = {
  title: "HokUi/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "tt",
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placement: "top",
    children: "This is a Tooltip",
  },
};
