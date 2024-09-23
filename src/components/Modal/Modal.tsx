import React from "react";
import {
  ModalOverlay,
  ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import useSlot from "react-use-slots";
import { tv } from "tailwind-variants";
import type { Size } from "../types/prop.type";
import { Button } from "../Button";

type customeProps = {
  title?: string;
  size?: Size;
  onCancel?: () => void;
  onOk?: () => void;
};

const overlayStyles = tv({
  base: "fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

const modalStyles = tv({
  base: "max-w-6xl max-h-full rounded-2xl bg-white forced-colors:bg-[Canvas] text-left align-middle text-slate-700 shadow-2xl bg-clip-padding border border-black/10",
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200",
    },
    size: {
      xs: "w-[20vw]",
      sm: "w-[35vw]",
      md: "w-[50vw]",
      lg: "w-[65vw]",
      xl: "w-[80vw]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvailableSlotName = "bottom-content" | "header-content";

function RenderSlot(
  props: ModalOverlayProps & customeProps,
  slotName?: AvailableSlotName,
  element?: () => React.ReactElement,
) {
  const [slot, hasSlot] = useSlot(props.children);

  if (slotName && element) {
    if (hasSlot(slotName)) {
      return slot(slotName);
    }

    return element();
  }

  return slot();
}

export type ModalProps = ModalOverlayProps & customeProps;

export function Modal(props: ModalProps) {
  const handleCLickCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  const handleCLickOk = () => {
    if (props.onOk) {
      props.onOk();
    }
  };

  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <RACModal
        {...props}
        className={(renderProps) =>
          modalStyles({ ...renderProps, size: props.size })
        }
      >
        <div className="flex flex-col gap-4 p-4">
          {/* header */}
          {RenderSlot(props, "header-content", () => (
            <>
              {props.title && (
                <span className="font-semibold text-lg">{props.title}</span>
              )}
            </>
          ))}

          {/* content */}
          <div className="max-h-[75vh] overflow-y-auto overflow-x-hidden">
            {RenderSlot(props)}
          </div>

          {/* foot */}
          {RenderSlot(props, "bottom-content", () => (
            <div className="flex flex-row justify-end gap-2">
              <Button color="danger" variant="text" onPress={handleCLickCancel}>
                ยกเลิก
              </Button>
              <Button color="primary" variant="default" onPress={handleCLickOk}>
                ตกลง
              </Button>
            </div>
          ))}
        </div>
      </RACModal>
    </ModalOverlay>
  );
}
