import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../components/Link";

const meta = {
  title: "HokUi/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "this is Link",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    target: "_blank",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "text",
  },
};
