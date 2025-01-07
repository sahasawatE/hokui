import { ButtonProps as RACButtonProps } from "react-aria-components";
import type { Color, ButtonVariant, Rounded, Size } from "../types/prop.type";
export interface ButtonProps extends RACButtonProps {
    variant?: ButtonVariant;
    color?: Color;
    rounded?: Rounded;
    isLoading?: boolean;
    size?: Size;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
}
