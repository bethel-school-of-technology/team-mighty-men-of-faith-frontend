import {
  setStartDateErrorTrueConst,
  setEndDateErrorTrueConst,
  setStartTimeErrorTrueConst,
  setEndTimeErrorTrueConst,
  setStartDateErrorFalseConst,
  setEndDateErrorFalseConst,
  setStartTimeErrorFalseConst,
  setEndTimeErrorFalseConst,
} from "../../constants";

import { errorsStateType, errorsActionType } from "../../types";

const defaultState = {
  startDateError: false,
  startTimeError: false,
  endDateError: false,
  endTimeError: false,
};

export default function servicesSearchCategories(
  state: errorsStateType = defaultState,
  action: errorsActionType
): errorsStateType {
  switch (action.type) {
    case setStartDateErrorTrueConst:
      return {
        ...state,
        startDateError: true,
      };
    case setStartDateErrorFalseConst:
      return {
        ...state,
        startDateError: false,
      };
    case setEndDateErrorTrueConst:
      return {
        ...state,
        endDateError: true,
      };
    case setEndDateErrorFalseConst:
      return {
        ...state,
        endDateError: false,
      };
    case setStartTimeErrorTrueConst:
      return {
        ...state,
        startTimeError: true,
      };
    case setStartTimeErrorFalseConst:
      return {
        ...state,
        startTimeError: false,
      };
    case setEndTimeErrorTrueConst:
      return {
        ...state,
        endTimeError: true,
      };
    case setEndTimeErrorFalseConst:
      return {
        ...state,
        endTimeError: false,
      };
    default:
      return state;
  }
}
