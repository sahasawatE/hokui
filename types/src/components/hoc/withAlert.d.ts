import React from "react";
import { useAlert } from "../ComponentProvider/HokUIProvider";
export type WithAlertProps = {
    alert: ReturnType<typeof useAlert>;
};
export declare function WithAlert<P extends WithAlertProps = WithAlertProps>(Component: React.ComponentType<P>): (props: Omit<P, keyof WithAlertProps>) => import("react/jsx-runtime").JSX.Element;
