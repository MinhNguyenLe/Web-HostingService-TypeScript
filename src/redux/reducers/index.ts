import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducerUser } from "./user";
import { reducerPage } from "./page";
import { reducerCart } from "./cart";

// const rootPersistConfig = {
//   key: "root",
//   storage: storage,
// };

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};

const pagePersistConfig = {
  key: "page",
  storage: storage,
  whitelist: ["theme"],
};

const cartPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["domain", "hosting"],
};

type userState = ReturnType<typeof reducerUser>;
type pageState = ReturnType<typeof reducerPage>;
type cartState = ReturnType<typeof reducerCart>;

const reducers = combineReducers({
  user: persistReducer<userState>(userPersistConfig, reducerUser),
  page: persistReducer<pageState>(pagePersistConfig, reducerPage),
  cart: persistReducer<cartState>(cartPersistConfig, reducerCart),
});

export type RootState = ReturnType<typeof reducers>;

// const presistedReducer = persistReducer<RootState>(rootPersistConfig, reducers);

export default reducers;
