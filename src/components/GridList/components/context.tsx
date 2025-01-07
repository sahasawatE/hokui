import { createContext } from "react";
import type { CustomGridListItemContext } from "../props";

export const GridContext = createContext<CustomGridListItemContext>({
  color: "default",
  allowDragandDrop: false,
});
