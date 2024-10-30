import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../components/Separator";

const meta = {
  title: "HokUi/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      type: "string",
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <div
        data-orientation={props.orientation}
        className="data-[orientation=horizontal]:block data-[orientation=vertical]:flex"
      >
        <span
          data-orientation={props.orientation}
          className="data-[orientation=horizontal]:block data-[orientation=vertical]:inline p-2"
        >
          Hok1
        </span>
        <Separator {...props}></Separator>
        <span
          data-orientation={props.orientation}
          className="data-[orientation=horizontal]:block data-[orientation=vertical]:inline p-2"
        >
          Hok2
        </span>
      </div>
    );
  },
};
