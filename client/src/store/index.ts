import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import allReducers from "./reducers";

export const store = createStore(
  allReducers,

  // compose(
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  // )
);
