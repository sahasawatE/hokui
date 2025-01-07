import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { ComboBox } from "../components/ComboBox";
import { useState } from "react";

const meta = {
  title: "HokUi/ComboBox",
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const list = [
      {
        a: "a123123",
        key: "b1",
        title: "hok b1",
        value: "b11",
      },
      {
        a: "b123123",
        key: "b2",
        title: "hok b2",
        value: "b22",
      },
      {
        a: "c123123",
        key: "b3",
        title: "hok b3",
        value: "b33",
      },
    ];

    const [selected, setSelected] = useState("b1");

    return (
      <ComboBox
        selectedKey={selected}
        items={list}
        onSelectionChange={(e) => {
          if (e) {
            setSelected(e);
          }
        }}
        {...props}
      ></ComboBox>
    );
  },
};
