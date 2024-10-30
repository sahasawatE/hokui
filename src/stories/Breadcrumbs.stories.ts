import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Breadcrumbs } from "../components/Breadcrumbs";

const meta = {
  title: "HokUi/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        title: "menu 1",
        to: "#",
      },
      {
        title: "menu 2",
        to: "#",
      },
      {
        title: "menu 3",
        to: "#",
      },
    ],
    isDisabled: false,
  },
};
