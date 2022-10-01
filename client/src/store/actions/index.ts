import { clearSnackBarConst, setSnackBarConst } from "../../constants/redux";
import { stringActionType } from "../../types";

export function setSnackBar(payload: string): stringActionType {
  return {
    type: setSnackBarConst,
    payload,
  };
}
export function clearSnackBar(): any {
  return {
    type: clearSnackBarConst,
  };
}
