import { ToggleButtonProps } from "react-aria-components";
import type { ButtonVariant, Color, Rounded, Size } from "../types/prop.type";
type CustomProps = {
    color?: Color;
    variant?: Exclude<ButtonVariant, "default">;
    rounded?: Rounded;
    size?: Size;
};
export declare function ToggleButton(props: ToggleButtonProps & CustomProps): import("react/jsx-runtime").JSX.Element;
export {};
