import { Provider } from "react-redux";
import { store } from "../store";
import ThemeConfig from "../theme";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface schema {
  children: JSX.Element;
}
export default function App({ children }: schema) {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeConfig>
          {children}
        </ThemeConfig>
      </LocalizationProvider>
    </Provider>
  );
}
