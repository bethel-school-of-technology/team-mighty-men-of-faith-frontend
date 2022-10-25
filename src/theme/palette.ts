import {
  errorContrastText,
  errorDark,
  errorLight,
  errorMain,
  grey100,
  grey200,
  grey300,
  grey400,
  grey50,
  grey500,
  grey600,
  grey700,
  grey800,
  grey900,
  greyA100,
  greyA200,
  greyA400,
  greyA700,
  infoContrastText,
  infoDark,
  infoLight,
  infoMain,
  primaryContrast,
  primaryDark,
  primaryLight,
  primaryMain,
  secondaryContrast,
  secondaryDark,
  secondaryLight,
  secondaryMain,
  successContrastText,
  successDark,
  successLight,
  successMain,
  warningContrast,
  warningDark,
  warningLight,
  warningMain,
} from "./themeConstants";

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const grey = {
  50: grey50,
  100: grey100,
  200: grey200,
  300: grey300,
  400: grey400,
  500: grey500,
  600: grey600,
  700: grey700,
  800: grey800,
  900: grey900,
  A100: greyA100,
  A200: greyA200,
  A400: greyA400,
  A700: greyA700,
};

const primary = {
  light: primaryLight,
  main: primaryMain,
  dark: primaryDark,
  contrastText: primaryContrast,
};

const secondary = {
  light: secondaryLight,
  main: secondaryMain,
  dark: secondaryDark,
  contrastText: secondaryContrast,
};

const info = {
  light: infoLight,
  main: infoMain,
  dark: infoDark,
  contrastText: infoContrastText,
};
const success = {
  light: successLight,
  main: successMain,
  dark: successDark,
  contrastText: successContrastText,
};
const warning = {
  light: warningLight,
  main: warningMain,
  dark: warningDark,
  contrastText: warningContrast,
};
const error = {
  light: errorLight,
  main: errorMain,
  dark: errorDark,
  contrastText: errorContrastText,
};

const gradients = {
  primary: createGradient(primary.light, primary.main),
  info: createGradient(info.light, info.main),
  success: createGradient(success.light, success.main),
  warning: createGradient(warning.light, warning.main),
  error: createGradient(error.light, error.main),
};

// default export palette
const palette = {
  common: { black: "#000", white: "#fff" },
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  gradients,
  divider: grey["A400"],
  text: { primary: grey[800], secondary: grey[600], disabled: grey[500] },
  background: { paper: "#fff", default: "#fff" },
  action: {
    active: grey[600],
    hover: grey["A100"],
    selected: grey["A200"],
    disabled: grey["A700"],
    disabledBackground: grey["A400"],
    focus: grey["A200"],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
