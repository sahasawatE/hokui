import React from "react";
import type { Color, DialogVariant } from "../types/prop.type";
export type ToastOptions = {
    render: React.ReactNode;
    delay?: number;
    color?: Color | "white";
};
export type DialogOptions = {
    title: string;
    subTitle: string;
    type?: "confirm" | "warning";
    variant?: DialogVariant;
    cancelText?: string;
    confirmText?: string;
    onConfirm?: () => void;
    onClose?: () => void;
};
export type HokUiProviderProps = {
    locale?: string;
    children: React.ReactNode;
};
declare function Provider(props: HokUiProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useAlert(): {
    toast: (options: ToastOptions) => void;
    dialog: (options: DialogOptions) => void;
};
export declare const HokUi: {
    Provider: typeof Provider;
};
export {};
