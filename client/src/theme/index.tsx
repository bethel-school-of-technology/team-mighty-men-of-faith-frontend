import { CssBaseline } from "@mui/material";
import {
    StyledEngineProvider, ThemeProvider
} from "@mui/material/styles";

interface schema {
  children: JSX.Element | JSX.Element[];
}

export default function ThemeConfig({ children }: schema) {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={{}}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
