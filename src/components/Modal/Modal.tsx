import React, { useMemo, useRef } from "react";
import {
  ModalOverlay,
  ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import useSlot from "react-use-slots";
import { tv } from "tailwind-variants";
import type { Size } from "../types/prop.type";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { Loading } from "../Loading";

type customeProps = {
  title?: string;
  size?: Size;
  isLoading?: boolean;
  hideScrollbar?: boolean;
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
      xs: "w-[60vw] md:w-[20vw]",
      sm: "w-[70vw] md:w-[35vw]",
      md: "w-[80vw] md:w-[50vw]",
      lg: "w-[90vw] md:w-[65vw]",
      xl: "w-[100vw] md:w-[80vw]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const bodyStyle = tv({
  base: "relative max-h-[75vh] overflow-x-hidden",
  variants: {
    hideScrollbar: {
      true: "no-scrollbar",
    },
    isLoading: {
      true: "overflow-y-hidden",
      false: "overflow-y-scroll",
    },
  },
  defaultVariants: {
    hideScrollbar: false,
    isLoading: false,
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
  const containerRef = useRef<HTMLDivElement | null>(null);

  const containerArea = useMemo(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      return {
        w: `${containerWidth}px`,
        h: `${containerHeight}px`,
      };
    }

    return null;
  }, [containerRef]);

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
        <div className="flex flex-col">
          {/* header */}
          <div className="p-4">
            {RenderSlot(props, "header-content", () => (
              <>
                {props.title && (
                  <span className="font-semibold text-lg">{props.title}</span>
                )}
              </>
            ))}
          </div>

          {/* content */}
          <div
            ref={containerRef}
            className={bodyStyle({
              hideScrollbar: props.hideScrollbar,
              isLoading: props.isLoading,
            })}
          >
            <motion.div
              animate={
                props.isLoading
                  ? {
                      display: "block",
                      opacity: 1,
                      zIndex: 1,
                    }
                  : {
                      opacity: 0,
                      transitionEnd: {
                        zIndex: -1,
                        display: "none",
                      },
                    }
              }
              className="absolute bg-white/75"
              style={
                containerArea
                  ? {
                      height: containerArea.h,
                      width: containerArea.w,
                    }
                  : {}
              }
            >
              <div className="flex flex-row items-center h-full justify-center">
                <div className="bg-white border w-20 h-20 rounded-xl p-2 flex flex-col justify-center items-center top-1/2 left-1/2">
                  <Loading size="xl" />
                </div>
              </div>
            </motion.div>
            <div className="px-4">{RenderSlot(props)}</div>
          </div>

          {/* foot */}
          <div className="p-4">
            {RenderSlot(props, "bottom-content", () => (
              <div className="flex flex-row justify-end gap-2">
                <Button
                  color="danger"
                  variant="text"
                  onPress={handleCLickCancel}
                >
                  ยกเลิก
                </Button>
                <Button
                  color="primary"
                  variant="default"
                  onPress={handleCLickOk}
                >
                  ตกลง
                </Button>
              </div>
            ))}
          </div>
        </div>
      </RACModal>
    </ModalOverlay>
  );
}
