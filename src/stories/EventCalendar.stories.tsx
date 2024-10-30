import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { EventCalendar } from "../components/EventCalendar";
import { CalendarEvent } from "../components/types/prop.type";

const generateEvent = () => {
  const today = new Date();
  const stringDate1 = `${today.getFullYear()}-${strDigit(
    today.getMonth() + 1,
  )}-${strDigit(9)}`;
  const stringDate2 = `${today.getFullYear()}-${strDigit(
    today.getMonth() + 1,
  )}-${strDigit(15)}`;
  const stringDate3 = `${today.getFullYear()}-${strDigit(
    today.getMonth() + 1,
  )}-${strDigit(27)}`;

  function strDigit(digit: number) {
    if (digit < 10) return `0${digit}`;
    return `${digit}`;
  }
  const events: Array<CalendarEvent> = [
    {
      day: stringDate1,
      events: [
        { type: "Deadline", details: "Hand drawing" },
        { type: "Family", details: "Family dinner time" },
        { type: "Family", details: "Koh birthday" },
        { type: "Daily", details: "Buy some dairy" },
      ],
    },
    {
      day: stringDate2,
      events: [
        { type: "Deadline", details: "宿題出す日" },
        { type: "Family", details: "To the sea" },
        { type: "Daily", details: "Buy some dairy" },
        { type: "Daily", details: "Cook" },
        { type: "Daily", details: "Laundry" },
      ],
    },
    {
      day: stringDate3,
      events: [
        { type: "Deadline", details: "This project" },
        { type: "Deadline", details: "That project" },
        { type: "Family", details: "Bring home some bacons" },
      ],
    },
  ];

  return events;
};

const meta = {
  title: "HokUi/EventCalendar",
  component: EventCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    events: generateEvent(),
    eventColors: [
      { type: "Deadline", color: "#f44", textColor: "#fff" },
      { type: "Daily", color: "#4f4", textColor: "#fff" },
      { type: "Family", color: "#44f", textColor: "#fff" },
    ],
  },
} satisfies Meta<typeof EventCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return <EventCalendar {...props}></EventCalendar>;
  },
};
