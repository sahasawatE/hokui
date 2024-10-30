import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "../components/ToggleButton";

const meta = {
  title: "HokUi/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "",
    isDisabled: false,
  },
  argTypes: {
    variant: {
      name: "Variant",
      control: "select",
      options: ["bordered", "flat", "text", "icon"],
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle Me",
    variant: "bordered",
    rounded: "md",
    color: "default",
  },
};
