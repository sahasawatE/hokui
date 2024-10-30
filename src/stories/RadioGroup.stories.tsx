import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "../components/RadioGroup";
import { useState } from "react";

const items = [
  { value: "1", title: "title1" },
  { value: "2", title: "title2" },
];

const meta = {
  title: "HokUi/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { options: items, label: "this is label" },
  argTypes: {
    isRequired: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <RadioGroup {...props}></RadioGroup>;
  },
};

export const CustomItems: Story = {
  render: (props) => {
    return (
      <RadioGroup {...props} color="primary">
        {(e) => <Radio value={e.value}>custom text {e.title}</Radio>}
      </RadioGroup>
    );
  },
};

export const InvalidState: Story = {
  render: (props) => {
    const [selected, setSelected] = useState("");
    return (
      <RadioGroup
        {...props}
        isRequired
        value={selected}
        isInvalid={selected === ""}
        errorMessage={selected === "" ? "this is error message" : ""}
        onChange={(e) => setSelected(e)}
      ></RadioGroup>
    );
  },
};
