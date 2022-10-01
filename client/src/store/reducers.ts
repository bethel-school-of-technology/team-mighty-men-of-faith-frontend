import { combineReducers } from "redux";

import { stateTypes } from "../types";


import loadingIndicator from "./loadingIndicator";
import snackBar from "./snackBar";

export default combineReducers<stateTypes>({
  snackBar,
  loadingIndicator,
});
