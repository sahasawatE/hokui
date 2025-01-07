import React from "react";
import type { SwitchProps as AriaSwitchProps } from "react-aria-components";
import type { Color } from "../types/prop.type";

type CustomSwitchProps = {
  color?: Color;
};

export interface SwitchProps
  extends Omit<AriaSwitchProps, "children">,
    CustomSwitchProps {
  label?: React.ReactNode;
}
