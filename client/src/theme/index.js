"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
const breakpoints_1 = __importDefault(require("./breakpoints"));
const palette_1 = __importDefault(require("./palette"));
const shadows_1 = __importStar(require("./shadows"));
const shape_1 = __importDefault(require("./shape"));
const themeOverrides_1 = __importDefault(require("./themeOverrides"));
const themeOptions = {
    palette: palette_1.default,
    shadows: shadows_1.default,
    customShadows: shadows_1.customShadows,
    shape: shape_1.default,
    breakpoints: breakpoints_1.default,
};
const theme = (0, styles_1.createTheme)(themeOptions);
theme.components = (0, themeOverrides_1.default)(theme);
function ThemeConfig({ children }) {
    return (<styles_1.StyledEngineProvider>
      <styles_1.ThemeProvider theme={theme}>
        <material_1.CssBaseline />
        {children}
      </styles_1.ThemeProvider>
    </styles_1.StyledEngineProvider>);
}
exports.default = ThemeConfig;
