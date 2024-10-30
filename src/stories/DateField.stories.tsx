import type { Meta, StoryObj } from "@storybook/react";
import { DateField } from "../components/DateField";

const meta = {
  title: "HokUi/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
