import type { CardRounded, CardVariant, Shadow } from "../types/prop.type";

export type CardProps = {
  variant?: CardVariant;
  rounded?: CardRounded;
  shadow?: Shadow;
  title?: string;
  classNames?: {
    base?: string;
    header?: string;
    title?: string;
    content?: string;
  };
  children: React.ReactNode;
};

export type AvailableSlotName = "header-content" | "header-actions";
