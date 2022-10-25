import { setAuthConst } from "../../constants";
import { authActionsType, authStateType } from "../../types";

const defaultState = {
  isLoggedIn: false,
  token: "",
};

export default function AuthReducer(
  state: authStateType = defaultState,
  action: authActionsType
): authStateType {
  switch (action.type) {
    case setAuthConst:
      return action.payload;
    default:
      return state;
  }
}


export function setUserLogin(token: string){
return {
  type: setAuthConst,
  payload: {
    token,
    isLoggedIn: true
  }
}
}