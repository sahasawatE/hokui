import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";
import type { Layout, Theme } from "./config.type";

const defaultLightTheme = {
  light: {
    background: "#F6F5F4",
    primary: {
      50: "#EEF6FF",
      100: "#DCEBFC",
      200: "#BED5F2",
      300: "#95B8E5",
      400: "#7DAAE0",
      500: "#5B91D4",
      600: "#4874A9",
      700: "#36577F",
      800: "#243A54",
      900: "#121D2A",
      DEFAULT: "#5B91D4",
    },
    secondary: {
      50: "#F0F2F5",
      100: "#E3E7EF",
      200: "#CAD0DB",
      300: "#ADB5C4",
      400: "#8F9AAE",
      500: "#64718B",
      600: "#505A6F",
      700: "#3C4353",
      800: "#282D37",
      900: "#14161B",
      DEFAULT: "#64718B",
    },
    default: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#D8DADF",
      300: "#B6BAC3",
      400: "#8E95A2",
      500: "#6B7280",
      600: "#4A4E5A",
      700: "#40444C",
      800: "#383A42",
      900: "#25272C",
      DEFAULT: "#6B7280",
    },
    success: {
      50: "#F0F7F6",
      100: "#E2F0ED",
      200: "#C5E2DB",
      300: "#A9D3CA",
      400: "#8CC5B8",
      500: "#70B7A7",
      600: "#599285",
      700: "#436D64",
      800: "#2C4942",
      900: "#162421",
      DEFAULT: "#70B7A7",
    },
    danger: {
      50: "#FBEDEF",
      100: "#F7DBE0",
      200: "#F0B8C2",
      300: "#E894A3",
      400: "#E17185",
      500: "#DA4E67",
      600: "#AE3E52",
      700: "#822E3D",
      800: "#571F29",
      900: "#2B0F14",
      DEFAULT: "#DA4E67",
    },
    warning: {
      50: "#FEF2EF",
      100: "#FDE6E0",
      200: "#FBCDC1",
      300: "#F9B5A2",
      400: "#F79C83",
      500: "#F58465",
      600: "#C46950",
      700: "#934F3C",
      800: "#623428",
      900: "#311A14",
      DEFAULT: "#F58465",
    },
    info: {
      50: "#F0F4FC",
      100: "#E2E9FA",
      200: "#C6D3F6",
      300: "#A9BEF1",
      400: "#8DA8ED",
      500: "#7193E9",
      600: "#5A75BA",
      700: "#43588B",
      800: "#2D3A5D",
      900: "#161D2E",
      DEFAULT: "#7193E9",
    },
  },
};

const defaultLayout: Layout = {
  borderRadius: {
    none: "0",
    xs: ".125rem", // 2 px
    sm: ".25rem", // 4 px
    DEFAULT: ".5rem", // 8 px
    md: ".5rem", // 8 px
    lg: ".75rem", // 12 px
    xl: "1rem", // 16 px
    "2xl": "1.125rem", // 18 px
    // xs: ".25rem", // 4 px
    // sm: ".5rem", // 8 px
    // DEFAULT: ".75rem", // 12 px
    // md: ".75rem", // 12 px
    // lg: "1rem", // 16 px
    // xl: "1.125rem", // 18 px
    // "2xl": "1.25rem", // 20 px
    full: "9999px",
  },
  boxShadow: {
    sm: "0px 2px 10px 0px #DFE4E8",
    DEFAULT: "0px 4px 10px 4px #DFE4E8",
    md: "0px 4px 10px 4px #DFE4E8",
    lg: "0px 6px 24px 6px #C9D0D6",
  },
};

function hokTheme(config?: Theme, defaultTheme: string = "light") {
  return createThemes(Object.assign(defaultLightTheme, config ?? {}), {
    produceCssVariable: (colorName) => `--hok-${colorName}`,
    defaultTheme: defaultTheme ?? "light",
  });
}

function hokLayout(config?: Layout) {
  const layoutObject = Object.assign(defaultLayout, config ?? {});

  const layoutResult: { [key: string]: string } = {};

  for (const [key, value] of Object.entries(layoutObject)) {
    const layoutPrefix = `--hok-${key}`;

    if (typeof value === "object") {
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        const layoutPrefixWithVarient = `${layoutPrefix}-${nestedKey}`;

        layoutResult[layoutPrefixWithVarient] = nestedValue;
      }
    } else {
      layoutResult[layoutPrefix] = value;
    }
  }

  return plugin(
    ({ addUtilities }) => {
      addUtilities({
        ":root": {
          ...layoutResult,
          "--background": "hsl(var(--hok-background))",
        },
        ".text-balance": {
          "text-wrap": "balance",
        },
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".blur-dot": {
          "background-image":
            "radial-gradient(rgba(0, 0, 0, 0) 1px, #F6F5F4 1px)",
          "backdrop-filter": "blur(3px)",
          "background-size": "4px 4px",
        },
      });
    },
    {
      theme: {
        borderRadius: {
          none: "var(--hok-borderRadius-none)",
          xs: "var(--hok-borderRadius-xs)",
          sm: "var(--hok-borderRadius-sm)",
          DEFAULT: "var(--hok-borderRadius-DEFAULT)",
          md: "var(--hok-borderRadius-md)",
          lg: "var(--hok-borderRadius-lg)",
          xl: "var(--hok-borderRadius-xl)",
          "2xl": "var(--hok-borderRadius-2xl)",
          full: "var(--hok-borderRadius-full)",
        },
        boxShadow: {
          sm: "var(--hok-boxShadow-sm)",
          DEFAULT: "var(--hok-boxShadow-DEFAULT)",
          md: "var(--hok-boxShadow-md)",
          lg: "var(--hok-boxShadow-lg)",
        },
      },
    },
  );
}

export { hokTheme, hokLayout };
