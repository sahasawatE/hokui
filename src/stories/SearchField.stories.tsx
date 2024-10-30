import type { Meta, StoryObj } from "@storybook/react";
import { SearchField } from "../components/SearchField";

const meta = {
  title: "HokUi/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "This is lable",
  },
  argTypes: {
    description: {
      type: "string",
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <SearchField {...props}></SearchField>;
  },
};
