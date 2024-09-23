import { FieldErrorProps, GroupProps, InputProps, LabelProps, TextProps } from "react-aria-components";
import type { Color, Rounded, InputVariant } from "../types/prop.type";
type customProps = {
    color?: Color;
    rounded?: Rounded;
    variant?: InputVariant;
};
export declare function Label(props: LabelProps): import("react/jsx-runtime").JSX.Element;
export declare function Description(props: TextProps): import("react/jsx-runtime").JSX.Element;
export declare function FieldError(props: FieldErrorProps): import("react/jsx-runtime").JSX.Element;
export declare const fieldBorderStyles: import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}>, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}>, unknown, unknown, undefined>>;
export declare const fieldGroupStyles: import("tailwind-variants").TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, undefined, "group flex items-center h-9 bg-white forced-colors:bg-[Field] overflow-hidden", import("tailwind-variants/dist/config").TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
    variant: {
        bordered: string;
        underlined: string;
        flat: string;
    };
    rounded: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    color: {
        default: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", import("tailwind-variants/dist/config").TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-primary forced-colors:outline-[Highlight] outline-offset-1", import("tailwind-variants/dist/config").TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>>;
export declare function FieldGroup(props: GroupProps & customProps): import("react/jsx-runtime").JSX.Element;
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
