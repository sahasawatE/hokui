import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Checkbox, CheckboxGroup } from "../components/Checkbox";
import { useState } from "react";

const meta = {
  title: "HokUi/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "this is label",
    isDisabled: false,
  },
};

export const Group: Story = {
  render: (props) => {
    const [opt, setOpt] = useState<string[]>([]);

    return (
      <CheckboxGroup value={opt} onChange={setOpt}>
        <Checkbox {...props} value="1">
          option 1
        </Checkbox>
        <Checkbox {...props} value="2">
          option 2
        </Checkbox>
      </CheckboxGroup>
    );
  },
  args: {
    color: "default",
  },
};
