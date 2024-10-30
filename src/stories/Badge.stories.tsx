import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Badge } from "../components/Badge";
import { BadgeProps } from "../components/Badge/Badge";
import { Button } from "../components/Button";

const meta = {
  title: "HokUi/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    content: "99",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
  },
  render: (props: BadgeProps) => {
    return (
      <Badge {...props}>
        <Button>hok</Button>
      </Badge>
    );
  },
};
