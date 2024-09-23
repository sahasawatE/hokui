import React from "react";
import { SwitchProps as AriaSwitchProps } from "react-aria-components";
import type { Color } from "../types/prop.type";
type CustomProps = {
    color?: Color;
};
export interface SwitchProps extends Omit<AriaSwitchProps, "children">, CustomProps {
    label?: React.ReactNode;
}
export declare function Switch({ label, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
