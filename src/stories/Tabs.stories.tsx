import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Tabs } from "../components/Tabs";
import { Button } from "../components/Button";
import { CalendarIcon } from "lucide-react";

const meta = {
  title: "HokUi/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: [
      {
        key: "1",
        title: "title 1",
      },
      {
        key: "2",
        title: "title 2",
      },
      {
        key: "3",
        title: "title 3",
      },
      {
        key: "4",
        title: "title 4",
      },
    ],
    children(item) {
      return <div key={item.key}>{item.title}</div>;
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [tab, setTab] = useState("1");
    return <Tabs selectedKey={tab} onSelectionChange={setTab} {...props} />;
  },
};

export const CustomTabItems: Story = {
  render: (props) => {
    const [tab, setTab] = useState("1");
    return (
      <Tabs
        selectedKey={tab}
        onSelectionChange={setTab}
        renderTabItems={(itemProps) => (
          <div key={itemProps.key} className="flex flex-row gap-2 items-center">
            {itemProps.title}
            {itemProps.key === tab && (
              <Button variant="icon" className="text-white">
                <CalendarIcon aria-hidden className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
        {...props}
      />
    );
  },
};
