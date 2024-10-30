import type { Meta, StoryObj } from "@storybook/react";
import { NumberField } from "../components/NumberField";

const meta = {
  title: "HokUi/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "this is label",
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <NumberField {...props} />;
  },
};

export const InvalidState: Story = {
  render: (props) => {
    return (
      <NumberField
        {...props}
        isRequired
        isInvalid
        errorMessage="this is error message"
      />
    );
  },
};
