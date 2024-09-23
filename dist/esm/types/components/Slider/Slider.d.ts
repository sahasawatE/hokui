import { SliderProps as AriaSliderProps } from "react-aria-components";
import type { Color } from "../types/prop.type";
type CustomProps = {
    color?: Color;
};
export interface SliderProps<T> extends AriaSliderProps<T>, CustomProps {
    label?: string;
    thumbLabels?: string[];
}
export declare function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
