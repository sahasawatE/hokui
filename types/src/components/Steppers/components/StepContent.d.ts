import { type ReactNode } from "react";
import type { TabListState } from "react-stately";
import type { StepsChildrenProps, StepsObjectOption } from "../props";
export declare function StepContent<T extends StepsObjectOption & {
    id: number;
}>({ state, children, ...props }: {
    state: TabListState<T>;
    children: (childProps: StepsChildrenProps<T>) => ReactNode;
}): import("react/jsx-runtime").JSX.Element;
