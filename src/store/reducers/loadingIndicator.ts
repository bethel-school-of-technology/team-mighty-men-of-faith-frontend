import {
    setLoadingIndicatorConst,
    clearLoadingIndicatorConst,
  } from "../../constants";
  import { loadingIndicatorStateType, stringActionType } from "../../types";
  
  const defaultState = {
    loading: false,
    helperText: "",
  };
  
  export default function loadingIndicator(
    state: loadingIndicatorStateType = defaultState,
    action: stringActionType
  ): loadingIndicatorStateType {
    switch (action.type) {
      case setLoadingIndicatorConst:
        return {
          loading: true,
          helperText: action.payload ?? '',
        };
      case clearLoadingIndicatorConst:
        return defaultState;
      default:
        return state;
    }
  }
  