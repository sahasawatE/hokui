import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../components/Slider";

const meta = {
  title: "HokUi/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <Slider {...props}></Slider>;
  },
};

export const VerticalSlider: Story = {
  // todo: Fix corpulence vertical slider;
  render: (props) => {
    return <Slider orientation="vertical" {...props}></Slider>;
  },
};
