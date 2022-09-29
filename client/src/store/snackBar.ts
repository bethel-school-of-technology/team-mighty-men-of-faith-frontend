import { clearSnackBarConst, setSnackBarConst } from "../constants/redux";
import { stringActionType } from "../types";

export default function servicesSearchCategories(
  state: string = "",
  action: stringActionType
): string {
  switch (action.type) {
    case setSnackBarConst:
      return action.payload;
    case clearSnackBarConst:
      return "";
    default:
      return state;
  }
}
