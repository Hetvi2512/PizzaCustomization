import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import pizzaReducer from "./reducers/pizzaReducer";

import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers({
  ingredients: pizzaReducer,
});

const persist = persistReducer(persistConfig, rootReducer);

export default persist;
