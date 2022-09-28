<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
// ...

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
=======
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
>>>>>>> 57282f408b662b1f8b4ffddaf9e18cd5df4d2f8a
