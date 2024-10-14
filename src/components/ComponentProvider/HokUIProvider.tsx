import React from "react";
import { motion } from "framer-motion";
import { I18nProvider } from "react-aria";
import { tv } from "tailwind-variants";
import type { Color } from "../types/prop.type";

type ToastHandlerProps = {
  delay?: number;
  color?: Color;
  toastId: string;
  children: React.ReactNode;
  forceUpdate: React.DispatchWithoutAction;
  onClose: (id: string) => void;
};

class ToastHandler {
  public toastId: string;
  public color: Color;
  public currentTime: number;
  public delay: number;
  public show: boolean;
  private children: React.ReactNode;
  private forceUpdate: React.DispatchWithoutAction;
  private intervalId: ReturnType<typeof setInterval> | null;
  private onClose: (id: string) => void;

  constructor(props: ToastHandlerProps) {
    this.children = props.children;
    this.toastId = props.toastId;
    this.color = props.color ?? "default";
    this.delay = props.delay ?? 2500;
    this.forceUpdate = props.forceUpdate;
    this.onClose = props.onClose;

    this.currentTime = 0;
    this.show = true;
    this.intervalId = null;

    this.initInterval();
  }

  checkIfTimeout() {
    this.forceUpdate();
    if (this.currentTime >= this.delay + 500) {
      this.onClose(this.toastId);
      this.dispose();
    }
    if (this.currentTime >= this.delay + 250) {
      this.show = false;
    }
  }

  private initInterval() {
    this.intervalId = setInterval(() => {
      this.currentTime += 100;
      this.checkIfTimeout();
    }, 100);
  }

  private disposeInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);

      this.intervalId = null;
    }
  }

  public hoverHandler(isHover: boolean) {
    if (isHover) {
      this.disposeInterval();
    } else {
      this.initInterval();
    }
  }

  private dispose() {
    this.disposeInterval();

    this.currentTime = 0;
  }

  render() {
    return <div id={this.toastId}>{this.children}</div>;
  }
}

type DialogToastRendererProps = {
  children: React.ReactNode;
};

export type ToastOptions = {
  render: React.ReactNode;
  delay?: number;
  color?: Color;
};

type DialogToastRendererRef = {
  toast: (options: ToastOptions) => void;
};

const dialogToastRef = React.createRef<DialogToastRendererRef>();

const toastTimeStyles = tv({
  base: "absolute transition-all ease-linear bottom-0 left-0 h-1",
  variants: {
    color: {
      default: "bg-default",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      danger: "bg-danger",
      warning: "bg-warning",
      info: "bg-info",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

// eslint-disable-next-line react/display-name
const DialogToastRendererRef = React.forwardRef<
  DialogToastRendererRef,
  DialogToastRendererProps
>((props, ref) => {
  //
  const [toastState, setToastState] = React.useState<
    { ToastHandler: ToastHandler; show: boolean }[]
  >([]);

  const [, toastForceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    const tempToast = toastState.map((e) => e.show);
    if (toastState.length > 0 && !tempToast.includes(true)) {
      setToastState([]);
    }
  }, [toastState]);

  const toastAction = (id: string, options: ToastOptions) => {
    setToastState((prev) => {
      prev.push({
        ToastHandler: new ToastHandler({
          children: options.render,
          delay: options.delay,
          color: options.color,
          toastId: id,
          forceUpdate: toastForceUpdate,
          onClose: (tId) => {
            setToastState((prev) => {
              const temp = [...prev].map((e) => {
                if (e.ToastHandler.toastId === tId) {
                  return { ...e, show: false };
                }

                return e;
              });

              return temp;
            });
          },
        }),
        show: true,
      });

      return prev;
    });
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
        <div className="flex flex-col items-end gap-2 max-w-[800px] translate-x-[1200px]">
          {toastState.map((t, i) => (
            <div
              key={`toast-key-${i}`}
              style={{ display: t.show ? "block" : "none" }}
              onMouseOver={() => t.ToastHandler.hoverHandler(true)}
              onMouseOut={() => t.ToastHandler.hoverHandler(false)}
            >
              <motion.div
                animate={
                  t.ToastHandler.show
                    ? { translateX: -1200 }
                    : { translateX: 0 }
                }
                transition={{
                  ease: "backInOut",
                  bounceDamping: 0.5,
                }}
                className="bg-white/40 translate-x-[-1200px] backdrop-blur pointer-events-auto p-4 rounded shadow-sm relative overflow-hidden"
              >
                {t.ToastHandler.render()}
                <div
                  className={toastTimeStyles({ color: t.ToastHandler.color })}
                  style={{
                    width: `${
                      100 -
                      (t.ToastHandler.currentTime * 100) / t.ToastHandler.delay
                    }%`,
                  }}
                />
              </motion.div>
            </div>
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
