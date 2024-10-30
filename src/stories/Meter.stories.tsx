import type { Meta, StoryObj } from "@storybook/react";
import { Meter } from "../components/Meter";

const meta = {
  title: "HokUi/Meter",
  component: Meter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "this is meter",
    value: 50,
  },
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Meter {...props}></Meter>;
  },
};
