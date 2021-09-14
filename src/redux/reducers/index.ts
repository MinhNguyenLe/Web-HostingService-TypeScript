import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["email"],
};

const reducers = combineReducers({
  bank: bankReducer,
});

const presistedReducer = persistReducer(persistConfig, reducers);

export default presistedReducer;

export type RootState = ReturnType<typeof reducers>;
