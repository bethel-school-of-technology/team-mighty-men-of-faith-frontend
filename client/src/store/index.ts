import {
    applyMiddleware, createStore
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import allReducers from "./reducers";

// declare const window: any;

const persistConfig = {
  key: "carmigo",
  storage,
  timeout: undefined,
  whitelist: [],
  // blacklist: [
  //   'isLoggedIn'
  // ],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const STORE = createStore(
  persistedReducer,

  // compose(
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  // )
);

export const PERSISTOR = persistStore(STORE);
