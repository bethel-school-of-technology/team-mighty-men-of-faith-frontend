import { setCurrentCityConst } from "../../constants";
import { stringActionType } from "../../types";

export default function currentCity(
  state: string = "",
  action: stringActionType
): string {
  switch (action.type) {
    case setCurrentCityConst:
      return action.payload;
    default:
      return state;
  }
}
