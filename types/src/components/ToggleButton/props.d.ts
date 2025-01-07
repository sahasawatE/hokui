import type { ToggleButtonProps } from "react-aria-components";
import type { ButtonVariant, Color, Rounded, Size } from "../types/prop.type";
type CustomToggleButtonProps = {
    color?: Color;
    variant?: Exclude<ButtonVariant, "default">;
    rounded?: Rounded;
    size?: Size;
};
export type ToggleButtonProp = ToggleButtonProps & CustomToggleButtonProps;
export {};
