import { Provider } from "react-redux";

import RootOperations from "./components/RootOperations";
import HomePage from "./routes";
import { store } from "./store";
import ThemeConfig from "./theme";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <RootOperations>
            <HomePage />
          </RootOperations>
        </LocalizationProvider>
      </ThemeConfig>
    </Provider>
  );
}
