import type { Meta, StoryObj } from "@storybook/react";
import { RangeCalendar } from "../components/RangeCalendar";
import { CalendarDate } from "@internationalized/date";

const startDate = new CalendarDate(2022, 2, 3);
const endDate = new CalendarDate(2022, 2, 23);

const meta = {
  title: "HokUi/RangeCalendar",
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    defaultValue: {
      start: startDate,
      end: endDate,
    },
  },
} satisfies Meta<typeof RangeCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <RangeCalendar {...props}></RangeCalendar>;
  },
};
