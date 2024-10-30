import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Calendar } from "../components/Calendar";

const meta = {
  title: "HokUi/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
    isDisabled: false,
  },
};
