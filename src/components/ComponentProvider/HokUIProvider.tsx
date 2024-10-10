import React from "react";
import { I18nProvider } from "react-aria";

type DialogToastRendererProps = {
  children: React.ReactNode;
};

type DialogToastRendererRef = {
  toast: () => void;
};

export type ToastProps = {
  key: string;
};

const dialogToastRef = React.createRef<DialogToastRendererRef>();

// eslint-disable-next-line react/display-name
const DialogToastRendererRef = React.forwardRef<
  DialogToastRendererRef,
  DialogToastRendererProps
>((props, ref) => {
  const toastContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useImperativeHandle(ref, () => ({
    toast() {
      const postNode = document.createElement("div");
      postNode.innerHTML = "<button>This post is appended!</button>";
      postNode.className = "bg-red-300 pointer-events-auto p-4 rounded";
      toastContainerRef.current?.appendChild(postNode);
    },
  }));

  return (
    <div className="relative w-screen overflow-x-hidden">
      <div
        ref={toastContainerRef}
        className="fixed top-4 right-4 z-50 pointer-events-none flex flex-col gap-2"
      />
      <div>{props.children}</div>
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
    toast: () => {
      if (dialogToastRef.current) {
        dialogToastRef.current.toast();
      }
    },
  };
}

export const HokUi = {
  Provider,
};
