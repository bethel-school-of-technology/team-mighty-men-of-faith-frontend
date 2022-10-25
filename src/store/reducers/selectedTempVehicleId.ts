import { setSelectedTempVehicleIdConst } from "../../constants";
import { stringActionType } from "../../types";

export default function selectedVehicle(
  state: string = '',
  action: stringActionType
): string {
  switch (action.type) {
    case setSelectedTempVehicleIdConst:
      return action.payload;
    default:
      return state;
  }
}
