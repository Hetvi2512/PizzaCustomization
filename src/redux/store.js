import { createStore } from "redux";

import { persistStore } from "redux-persist";

import persist from "./rootReducer";

export const store = createStore(
  persist
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
