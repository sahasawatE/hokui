import type { ReactNode } from "react";
import type { AriaTabListOptions } from "react-aria";
import type { Color } from "../types/prop.type";
export interface StepCtx {
    color?: Color;
}
export type StepsObjectOption = {
    key: string;
    title: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    [key: string]: any;
};
export interface StepsChildrenProps<T extends StepsObjectOption> {
    key: T["key"];
    canBack: boolean;
    canNext: boolean;
    onBack: (targetStep?: T["key"]) => void;
    onNext: (targetStep?: T["key"]) => void;
}
export interface SteppersProps<T extends StepsObjectOption> extends Omit<AriaTabListOptions<T>, "items" | "children" | "onSelectionChange" | "selectedKey" | "orientation"> {
    steps: T[];
    children: (childProps: StepsChildrenProps<T>) => ReactNode;
    color?: Color;
    hideStep?: boolean;
    selectedStep?: string;
    onStepChange?: (key: string) => void;
    className?: string;
    doneText?: string;
    nextText?: string;
}
