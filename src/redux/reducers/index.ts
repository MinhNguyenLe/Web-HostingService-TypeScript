import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducerUser } from "./user";
import { reducerPage } from "./page";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["email"],
};

type userState = ReturnType<typeof reducerUser>;

const reducers = combineReducers({
  user: persistReducer<userState>(userPersistConfig, reducerUser),
  page: reducerPage,
});

export type RootState = ReturnType<typeof reducers>;

const presistedReducer = persistReducer<RootState>(rootPersistConfig, reducers);

export default presistedReducer;
