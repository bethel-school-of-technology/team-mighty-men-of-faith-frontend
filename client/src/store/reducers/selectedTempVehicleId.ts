import { setSelectedTempVehicleIdConst } from "../../constants";
import { numberActionType } from "../../types";

export default function selectedVehicle(
  state: number = 0,
  action: numberActionType
): number {
  switch (action.type) {
    case setSelectedTempVehicleIdConst:
      return action.payload;
    default:
      return state;
  }
}
