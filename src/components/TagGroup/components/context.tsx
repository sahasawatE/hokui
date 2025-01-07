import { createContext } from "react";
import type { TagContext } from "../props";

export const ColorContext = createContext<TagContext>({
  color: "default",
  variant: "default",
  rounded: "default",
});
