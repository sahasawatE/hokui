import { useMemo, useRef } from "react";
import { ModalOverlay, Modal as RACModal } from "react-aria-components";
import { Button } from "../../Button";
import type { ModalProps } from "../props";
import { bodyStyle, modalStyles, overlayStyles } from "../style";
import { RenderSlot } from "./slotted";
import LoadingOverlay from "./loadingOverlay";

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

    return {
      w: "100%",
      h: "100%",
    };
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
            <LoadingOverlay
              isLoading={props.isLoading}
              containerArea={containerArea}
            />
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
