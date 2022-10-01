import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import RootOperations from "./components/RootOperations";
import HomePage from "./routes";
import { PERSISTOR, STORE } from "./store";
import ThemeConfig from "./theme";

export default function App() {
  return (
    <Provider store={STORE}>
      <PersistGate persistor={PERSISTOR} loading={null}>
        <BrowserRouter>
          <ThemeConfig>
            <RootOperations>
              <HomePage />
            </RootOperations>
          </ThemeConfig>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
