import { CssBaseline } from "@mui/material";
import {
<<<<<<< HEAD
    StyledEngineProvider, ThemeProvider
} from "@mui/material/styles";
=======
  createTheme,
  StyledEngineProvider,
  Theme,
  ThemeProvider
} from "@mui/material/styles";
import React from "react";
<<<<<<< HEAD

>>>>>>> 57282f408b662b1f8b4ffddaf9e18cd5df4d2f8a
=======
import breakpoints from "./breakpoints";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import shape from "./shape";
import themeOverrides from "./themeOverrides";
>>>>>>> d0bae2da6eb941f5828fb40f59c4cbc3fea1f632

interface schema {
  children: JSX.Element | JSX.Element[];
}

<<<<<<< HEAD
export default function ThemeConfig({ children }: schema) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={{}}>
        <CssBaseline />
=======
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
<<<<<<< HEAD

>>>>>>> 57282f408b662b1f8b4ffddaf9e18cd5df4d2f8a
=======
>>>>>>> d0bae2da6eb941f5828fb40f59c4cbc3fea1f632
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
