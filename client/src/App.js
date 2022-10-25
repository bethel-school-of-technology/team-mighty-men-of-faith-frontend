"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const RootOperations_1 = __importDefault(require("./components/RootOperations"));
const routes_1 = __importDefault(require("./routes"));
const store_1 = require("./store");
const theme_1 = __importDefault(require("./theme"));
const AdapterMoment_1 = require("@mui/x-date-pickers/AdapterMoment");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
function App() {
    return (<react_redux_1.Provider store={store_1.store}>
      <theme_1.default>
        <LocalizationProvider_1.LocalizationProvider dateAdapter={AdapterMoment_1.AdapterMoment}>
          <RootOperations_1.default>
            <routes_1.default />
          </RootOperations_1.default>
        </LocalizationProvider_1.LocalizationProvider>
      </theme_1.default>
    </react_redux_1.Provider>);
}
exports.default = App;
