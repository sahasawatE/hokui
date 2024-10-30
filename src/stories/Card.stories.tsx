import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Card } from "../components/Card";

const meta = {
  title: "HokUi/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "This is title",
    children: <div>children</div>,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Card {...props} />;
  },
};
