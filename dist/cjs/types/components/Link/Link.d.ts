import { LinkProps as AriaLinkProps } from "react-aria-components";
import type { LinkVariant, Color } from "../types/prop.type";
export interface LinkProps extends AriaLinkProps {
    variant?: LinkVariant;
    color?: Color;
}
export declare function Link(props: LinkProps): import("react/jsx-runtime").JSX.Element;
