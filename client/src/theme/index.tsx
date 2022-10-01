import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider
} from "@mui/material/styles";
import React from "react";
import breakpoints from "./breakpoints";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import shape from "./shape";
import themeOverrides from "./themeOverrides";

interface schema {
  children: JSX.Element | JSX.Element[];
}

const themeOptions = {
  palette,
  shadows,
  customShadows,
  shape,

  breakpoints,
};
const theme: Theme = createTheme(themeOptions);
theme.components = themeOverrides(theme);

export default function ThemeConfig({ children }: schema) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
