import { setTempVehiclesConst } from "../../constants";

import { tempVehiclesStateType, setTempVehiclesActionType } from "../../types";

export default function tempVehicles(
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
        vehicles,
      }: setTempVehiclesActionType["payload"] = action.payload;
      return {
        ...state,
        [cityId]: {
          ...state[cityId],
          [companyId]: {
            countryParam,
            cityParam,
            vehicles,
          },
        },
      };
    }

    default:
      return state;
  }
}
