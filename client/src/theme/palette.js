"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const themeConstants_1 = require("./themeConstants");
function createGradient(color1, color2) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}
const grey = {
    50: themeConstants_1.grey50,
    100: themeConstants_1.grey100,
    200: themeConstants_1.grey200,
    300: themeConstants_1.grey300,
    400: themeConstants_1.grey400,
    500: themeConstants_1.grey500,
    600: themeConstants_1.grey600,
    700: themeConstants_1.grey700,
    800: themeConstants_1.grey800,
    900: themeConstants_1.grey900,
    A100: themeConstants_1.greyA100,
    A200: themeConstants_1.greyA200,
    A400: themeConstants_1.greyA400,
    A700: themeConstants_1.greyA700,
};
const primary = {
    light: themeConstants_1.primaryLight,
    main: themeConstants_1.primaryMain,
    dark: themeConstants_1.primaryDark,
    contrastText: themeConstants_1.primaryContrast,
};
const secondary = {
    light: themeConstants_1.secondaryLight,
    main: themeConstants_1.secondaryMain,
    dark: themeConstants_1.secondaryDark,
    contrastText: themeConstants_1.secondaryContrast,
};
const info = {
    light: themeConstants_1.infoLight,
    main: themeConstants_1.infoMain,
    dark: themeConstants_1.infoDark,
    contrastText: themeConstants_1.infoContrastText,
};
const success = {
    light: themeConstants_1.successLight,
    main: themeConstants_1.successMain,
    dark: themeConstants_1.successDark,
    contrastText: themeConstants_1.successContrastText,
};
const warning = {
    light: themeConstants_1.warningLight,
    main: themeConstants_1.warningMain,
    dark: themeConstants_1.warningDark,
    contrastText: themeConstants_1.warningContrast,
};
const error = {
    light: themeConstants_1.errorLight,
    main: themeConstants_1.errorMain,
    dark: themeConstants_1.errorDark,
    contrastText: themeConstants_1.errorContrastText,
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
exports.default = palette;
