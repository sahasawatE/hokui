import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Tag, TagGroup } from "../components/TagGroup";

const meta = {
  title: "HokUi/TagGroup",
  component: TagGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    selectionMode: {
      control: "radio",
      options: ["multiple", "none", "single"],
      description: "this props is used for selectable TagGroup",
    },
  },
} satisfies Meta<typeof TagGroup>;

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

    return (
      <TagGroup items={list} {...props}>
        {(e) => <Tag key={e.key}>{e.title}</Tag>}
      </TagGroup>
    );
  },
};

export const WithSelection: Story = {
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

    return (
      <TagGroup items={list} {...props}>
        {(e) => <Tag key={e.key}>{e.title}</Tag>}
      </TagGroup>
    );
  },
  args: {
    selectionMode: "single",
  },
};
