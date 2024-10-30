import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";

const meta = {
  title: "HokUi/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
