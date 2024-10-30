import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "../components/Select";
import { useState } from "react";

const list = [
  {
    key: "b1",
    title: "hok b1",
  },
  {
    key: "b2",
    title: "hok b2",
  },
  {
    key: "b3",
    title: "hok b3",
  },
];

const meta = {
  title: "HokUi/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  args: {
    items: list,
    children: (e) => <SelectItem key={e.key}>{e.title}</SelectItem>,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [selected, setSelected] = useState("b1");

    return (
      <Select
        selectedKey={selected}
        onSelect={(e) => setSelected(e.keys)}
        {...props}
      ></Select>
    );
  },
};
