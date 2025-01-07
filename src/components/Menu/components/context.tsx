import { createContext } from "react";
import type { MenuContext as MenuContextProps } from "../props";

export const MenuContext = createContext<MenuContextProps>({
  color: "default",
});
