import type { Layout, Theme } from "./config.type";
declare function hokTheme(config?: Theme, defaultTheme?: string): {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config>;
};
declare function hokLayout(config?: Layout): {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config>;
};
export { hokTheme, hokLayout };
