import { setBookingConst } from "../../constants";

import { bookingStateType, bookingActionType } from "../../types";

export default function servicesSearchCategories(
  state: bookingStateType = {},
  action: bookingActionType
): bookingStateType {
  switch (action.type) {
    case setBookingConst:
      return action.payload;
    default:
      return state;
  }
}
