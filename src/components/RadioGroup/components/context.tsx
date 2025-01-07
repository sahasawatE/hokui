import { createContext } from "react";
import type { RadioGroupContext } from "../props";

export const GroupContext = createContext<RadioGroupContext>({
  color: "default",
});
