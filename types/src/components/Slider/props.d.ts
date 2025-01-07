import type { SliderProps as AriaSliderProps } from "react-aria-components";
import type { Color } from "../types/prop.type";
interface CustomSliderProps {
    color?: Color;
}
export interface SliderProps<T> extends AriaSliderProps<T>, CustomSliderProps {
    label?: string;
    thumbLabels?: string[];
}
export {};
