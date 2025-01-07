import React from "react";
import type {
  BadgeRounded,
  BadgeVariant,
  Color,
  Position,
} from "../types/prop.type";

export type BadgeProps = {
  color?: Color;
  content?: string;
  children?: React.ReactNode;
  position?: Position;
  variant?: BadgeVariant;
  rounded?: BadgeRounded;
  className?: string;
};
