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

>>>>>>> 57282f408b662b1f8b4ffddaf9e18cd5df4d2f8a

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

};
const theme: Theme = createTheme(themeOptions);

export default function ThemeConfig({ children }: schema) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

>>>>>>> 57282f408b662b1f8b4ffddaf9e18cd5df4d2f8a
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
