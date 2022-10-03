import {
    applyMiddleware, createStore
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import allReducers from "./reducers";


const persistConfig = {
  key: "carmigo",
  storage,
  timeout: undefined,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(
  persistedReducer,

  // compose(
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  // )
);

export const persistor = persistStore(store);
