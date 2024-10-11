import { motion } from "framer-motion";
import React from "react";
import { I18nProvider } from "react-aria";

type ToastHandlerProps = {
  delay?: number;
  toastId: string;
  children: React.ReactNode;
  onClose: () => void;
};

class ToastHandler {
  public toastId: string;
  public delay: number;
  private children: React.ReactNode;
  private timeoutId: ReturnType<typeof setTimeout> | null;

  constructor(props: ToastHandlerProps) {
    this.children = props.children;
    this.toastId = props.toastId;
    this.delay = props.delay ?? 2500;

    this.timeoutId = setTimeout(() => {
      props.onClose();
      this.dispose();
    }, this.delay);
  }

  private timeHandler(isHover: boolean) {
    console.log(isHover, 1);
  }

  private dispose() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);

      this.timeoutId = null;
    }
  }

  render() {
    return (
      <div
        id={this.toastId}
        onMouseOver={() => this.timeHandler(true)}
        onMouseOut={() => this.timeHandler(false)}
      >
        {this.children}
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
  const [toastState, setToastState] = React.useState<ToastHandler[]>([]);
  const [renderKey, setRenderKey] = React.useState("");
  const [showToast, setshowToast] = React.useState(false);

  const toastAnimation = (delay: number) => {
    let a: number | undefined = undefined;

    const t = setTimeout(() => {
      a = 1200;

      clearTimeout(t);
    }, delay);

    return a;
  };

  const toastAction = (id: string, options: ToastOptions) => {
    setToastState((prev) => {
      prev.push(
        new ToastHandler({
          children: options.render,
          delay: options.delay,
          toastId: id,
          onClose: () => {
            console.log("close");
          },
        }),
      );

      return prev;
    });

    setshowToast(true);
    setRenderKey(`${id}-${Math.random()}`);
  };

  React.useImperativeHandle(ref, () => ({
    toast(options: ToastOptions) {
      const id = new Date().valueOf().toString();

      toastAction(id, options);
    },
  }));

  return (
    <div>
      {props.children}
      <div className="fixed top-4 right-4 z-50 pointer-events-none">
        <div
          key={renderKey}
          className="flex flex-col items-end gap-2 max-w-[800px]"
        >
          {showToast &&
            toastState.map((t, i) => (
              <motion.div
                key={`toast-key-${i}`}
                animate={{
                  translateX: toastAnimation(t.delay),
                }}
                className="bg-white/40 translate-x-[1200px] backdrop-blur pointer-events-auto p-4 rounded shadow-sm"
              >
                {t.render()}
              </motion.div>
            ))}
        </div>
      </div>
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
