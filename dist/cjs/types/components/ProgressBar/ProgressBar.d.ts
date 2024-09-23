import { ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
export interface ProgressBarProps extends AriaProgressBarProps {
    label?: string;
}
export declare function ProgressBar({ label, ...props }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
