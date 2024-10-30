import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useState } from "react";

const meta = {
  title: "HokUi/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "this is title",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onPress={() => setOpen(true)}>open modal</Button>
        <Modal
          {...props}
          isOpen={open}
          onCancel={() => setOpen(false)}
          onOk={() => setOpen(false)}
        >
          <div>this is body</div>
        </Modal>
      </div>
    );
  },
};

export const WithSlotName: Story = {
  render: (props) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onPress={() => setOpen(true)}>open modal</Button>
        <Modal {...props} isOpen={open}>
          <div slot="header-content">this is header</div>
          <div>this is body</div>
          <div
            slot="bottom-content"
            className="flex flex-row justify-between items-center"
          >
            this is footer
            <Button
              variant="flat"
              color="danger"
              onPress={() => setOpen(false)}
            >
              close modal
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};
