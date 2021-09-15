import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducerUser } from "./user";
import { reducerPage } from "./page";

// const rootPersistConfig = {
//   key: "root",
//   storage: storage,
// };

const tokenPersistConfig = {
  key: "token",
  storage: storage,
  whitelist: ["token"],
};

const pagePersistConfig = {
  key: "page",
  storage: storage,
  whitelist: ["theme"],
};

type userState = ReturnType<typeof reducerUser>;
type pageState = ReturnType<typeof reducerPage>;

const reducers = combineReducers({
  user: persistReducer<userState>(tokenPersistConfig, reducerUser),
  page: persistReducer<pageState>(pagePersistConfig, reducerPage),
});

export type RootState = ReturnType<typeof reducers>;

// const presistedReducer = persistReducer<RootState>(rootPersistConfig, reducers);

export default reducers;
