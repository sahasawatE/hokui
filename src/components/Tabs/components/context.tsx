import { createContext } from "react";
import type { TabsContextType } from "../props";

export const TabsContext = createContext<TabsContextType>({
  variant: "default",
  color: "default",
});
