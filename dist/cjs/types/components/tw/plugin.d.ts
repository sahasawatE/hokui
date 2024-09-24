import type { Theme } from "./config.type";
export declare function hokTheme(config?: Theme): {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config>;
};
