import { createContext } from "react";
import type { ListBoxContext } from "../props";

export const listBoxContext = createContext<ListBoxContext>({
  color: "default",
});
