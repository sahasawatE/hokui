type ColorVariant = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  DEFAULT: string;
};

type ColorVariables = {
  background?: string;
  default?: ColorVariant | string;
  primary?: ColorVariant | string;
  secondary?: ColorVariant | string;
  success?: ColorVariant | string;
  warning?: ColorVariant | string;
  danger?: ColorVariant | string;
  info?: ColorVariant | string;
};

type Theme = {
  [themeName: string]: ColorVariables;
  light: ColorVariables;
};

export type { Theme, ColorVariables, ColorVariant };
