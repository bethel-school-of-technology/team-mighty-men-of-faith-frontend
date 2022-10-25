import { paras, setAllParasConst } from "../../constants";
import { generalParasActionsType, generalParasStateType } from "../../types";



export default function servicesSearchCategories(
  state: generalParasStateType = paras,
  action: generalParasActionsType
): generalParasStateType {
  switch (action.type) {
    case setAllParasConst:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
