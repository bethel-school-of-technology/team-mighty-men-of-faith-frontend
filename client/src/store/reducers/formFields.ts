import { setStartDateConst } from "../../constants/index";
import {
  addDriverConst,
  removeDriverConst,
  addInsuranceConst,
  removeInsuranceConst,
  chargeByDayConst,
  chargeByMonthConst,
  setEndDateConst,
  setLocationConst,
} from "../../constants";
import {
  dateActionType,
  locationActionType,
  formFieldsStateType,
} from "../../types";

const defaultState = {
  addDriver: false,
  addInsurance: false,
  chargeByDay: true,

  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 1)),

  location: {
    lat: 33.6844,
    lng: 73.0479,
    address: "",
    isDefault: true,
  },
};

export default function servicesSearchCategories(
  state: formFieldsStateType = defaultState,
  action: any
): formFieldsStateType {
  switch (action.type) {
    case addDriverConst:
      return {
        ...state,
        addDriver: true,
      };
    case removeDriverConst:
      return {
        ...state,
        addDriver: false,
      };
    case addInsuranceConst:
      return {
        ...state,
        addInsurance: true,
      };
    case removeInsuranceConst:
      return {
        ...state,
        addInsurance: false,
      };
    case chargeByDayConst:
      return {
        ...state,
        chargeByDay: true,
      };
    case chargeByMonthConst:
      return {
        ...state,
        chargeByDay: false,
      };
    case setStartDateConst:
      return {
        ...state,

        startDate: action.payload as dateActionType["payload"],
      };
    case setEndDateConst:
      return {
        ...state,

        endDate: action.payload as dateActionType["payload"],
      };

    case setLocationConst:
      return {
        ...state,
        location: {
          ...(action.payload as locationActionType["payload"]),
          isDefault: false,
        },
      };

    default:
      return state;
  }
}
