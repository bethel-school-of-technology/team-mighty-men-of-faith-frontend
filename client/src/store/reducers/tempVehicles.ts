import { setTempVehiclesConst } from "../../constants";

import { tempVehiclesStateType, setTempVehiclesActionType } from "../../types";

export default function tempCehicles(
  state: tempVehiclesStateType = {},
  action: any
): tempVehiclesStateType {
  switch (action.type) {
    case setTempVehiclesConst: {
      const {
        cityId,
        companyId,
        countryParam,
        cityParam,

        filterParam,
        sortParam,
        vehicles,
      }: setTempVehiclesActionType["payload"] = action.payload;
      return {
        ...state,
        [cityId]: {
          ...state[cityId],
          [companyId]: {
            countryParam,
            cityParam,
            filterParam,
            sortParam,
            vehicles,
          },
        },
      };
    }

    default:
      return state;
  }
}
