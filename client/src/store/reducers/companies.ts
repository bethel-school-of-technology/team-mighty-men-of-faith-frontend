import { addToCompaniesConst, setCompaniesConst } from "../../constants";

import { companiesStateType, companiesActionType } from "../../types";

export default function servicesSearchCategories(
  state: companiesStateType = {},
  action: companiesActionType
): companiesStateType {
  switch (action.type) {
    case setCompaniesConst: {
      const { data, cityId } = action.payload;
      return {
        ...state,
        [cityId]: data,
      };
    }
    case addToCompaniesConst: {
      const { data, cityId } = action.payload;
      return {
        ...state,
        [cityId]: { ...state[cityId], ...data },
      };
    }
    default:
      return state;
  }
}

