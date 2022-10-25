import { setWhiteListCitiesConst } from "../../constants";

import { whiteListCitiesActionType } from "../../types";

export default function servicesSearchCategories(
  state: string[] = [],
  action: whiteListCitiesActionType
): string[] {
  switch (action.type) {
    case setWhiteListCitiesConst:
      return action.payload;
    default:
      return state;
  }
}
