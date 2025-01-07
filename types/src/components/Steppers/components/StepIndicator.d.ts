import type { Node, TabListState } from "react-stately";
import type { StepsObjectOption } from "../props";
export declare function StepIndicator<T extends StepsObjectOption & {
    id: number;
}>({ item, state, hideStep, elmWidth, }: {
    item: Node<T>;
    state: TabListState<T>;
    hideStep?: boolean;
    elmWidth?: (width: number) => void;
}): import("react/jsx-runtime").JSX.Element;
