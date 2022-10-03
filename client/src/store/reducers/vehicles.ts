import { setVehiclesConst } from "../../constants";
import { vehiclesStateType, setVehiclesActionType } from "../../types";

export default function servicesSearchCategories(
  state: vehiclesStateType = {},
  action: setVehiclesActionType
): vehiclesStateType {
  switch (action.type) {
    case setVehiclesConst: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}
