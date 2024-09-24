import React from "react";
import type { BadgeRounded, BadgeVariant, Color, Position } from "../types/prop.type";
export type BadgeProps = {
    color?: Color;
    content?: string;
    children?: React.ReactNode;
    position?: Position;
    variant?: BadgeVariant;
    rounded?: BadgeRounded;
    className?: string;
};
export declare function Badge(props: BadgeProps): import("react/jsx-runtime").JSX.Element;