import { combineReducers } from "redux";

import { stateTypes } from "../../types";
import whiteListCities from "./whiteListCities";
import companies from "./companies";
import vehicles from "./vehicles";
import tempVehicles from "./tempVehicles";
import booking from "./booking";
import currentCity from "./currentCity";
import selectedTempVehicleId from "./selectedTempVehicleId";

import errors from "./errors";

import formFields from "./formFields";
import paras from "./paras";
import snackBar from "./snackBar";
import loadingIndicator from "./loadingIndicator";
import auth from './auth';

export default combineReducers<stateTypes>({
  whiteListCities,
  companies,
  vehicles,
  tempVehicles,
  booking,
  currentCity,
  selectedTempVehicleId,
  errors,
  snackBar,

  formFields,
  paras,
  loadingIndicator,
  auth
});
