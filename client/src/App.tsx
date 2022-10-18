import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import RootOperations from "./components/RootOperations";
import HomePage from "./routes";
import { persistor, store } from "./store";
import ThemeConfig from "./theme";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <ThemeConfig>
          <LocalizationProvider dateAdapter={AdapterMoment}>

            <RootOperations>
              <HomePage />
            </RootOperations>
          </LocalizationProvider>
          </ThemeConfig>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
