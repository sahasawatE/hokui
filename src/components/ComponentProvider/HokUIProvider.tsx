import React from "react";
import { renderToString } from "react-dom/server";
import { I18nProvider } from "react-aria";
import { motion } from "framer-motion";

type ToastHandlerProps = {
  children: React.ReactNode;
  // onHover: (isHover: boolean) => void;
  // onClick: () => void;
  onClose: () => void;
};

type ToastHandlerState = {
  timoutId: ReturnType<typeof setTimeout> | null;
};

class ToastHandler extends React.Component<
  ToastHandlerProps,
  ToastHandlerState
> {
  state: ToastHandlerState = {
    timoutId: null,
  };

  constructor(props: ToastHandlerProps) {
    super(props);

    const timoutId = setTimeout(() => {
      props.onClose();
    }, 2500);

    this.state.timoutId = timoutId;
  }

  componentWillUnmount(): void {
    if (this.state.timoutId) {
      clearTimeout(this.state.timoutId);
      this.setState({ timoutId: null });
    }
  }

  render(): React.ReactNode {
    return (
      <div
      // onMouseEnter={() => props.onHover(true)}
      // onMouseLeave={() => props.onHover(false)}
      // onClick={props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

type DialogToastRendererProps = {
  children: React.ReactNode;
};

export type ToastOptions = {
  render: React.ReactNode;
  delay?: number;
};

type DialogToastRendererRef = {
  toast: (options: ToastOptions) => void;
};

const dialogToastRef = React.createRef<DialogToastRendererRef>();

// eslint-disable-next-line react/display-name
const DialogToastRendererRef = React.forwardRef<
  DialogToastRendererRef,
  DialogToastRendererProps
>((props, ref) => {
  const toastContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useImperativeHandle(ref, () => ({
    toast(options: ToastOptions) {
      if (toastContainerRef.current) {
        const postNode = document.createElement("div");
        postNode.classList.add("animate-toastIn");
        const toastElm = renderToString(
          <div className="bg-white/40 backdrop-blur pointer-events-auto p-4 rounded shadow-sm">
            <ToastHandler
              onClose={() => {
                postNode.classList.replace(
                  "animate-toastIn",
                  "animate-toastOut",
                );
                const toastTimeout = setTimeout(() => {
                  toastContainerRef.current?.removeChild(postNode);
                  clearTimeout(toastTimeout);
                }, 500);
              }}
            >
              {options.render}
            </ToastHandler>
          </div>,
        );
        postNode.innerHTML = toastElm;
        toastContainerRef.current.appendChild(postNode);
      }
    },
  }));

  return (
    <div>
      {props.children}
      <motion.div className="fixed top-4 right-4 z-50 pointer-events-none">
        <div
          ref={toastContainerRef}
          className="flex flex-col items-end gap-2"
        />
      </motion.div>
    </div>
  );
});

export type HokUiProviderProps = {
  locale?: string;
  children: React.ReactNode;
};

function Provider(props: HokUiProviderProps) {
  return (
    <I18nProvider locale={props.locale ?? "th-TH-u-ca-gregory-nu-latn"}>
      <DialogToastRendererRef ref={dialogToastRef}>
        {props.children}
      </DialogToastRendererRef>
    </I18nProvider>
  );
}

export function useAlert() {
  return {
    toast: (options: ToastOptions) => {
      if (dialogToastRef.current) {
        dialogToastRef.current.toast(options);
      }
    },
  };
}

export const HokUi = {
  Provider,
};
