import { createContext } from "react";
import type { StepCtx } from "../props";

export const StepContext = createContext<StepCtx>({
  color: "default",
});
