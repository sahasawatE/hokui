import { hokTheme, hokLayout } from "./src/components/tw/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
    hokTheme(),
    hokLayout(),
  ],
};

export default config;
