import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducerUser } from "./user";
import { reducerPage } from "./page";
import { reducerCart } from "./cart";
import { redHosting } from "./hosting";
import { redVPS } from "./vps";
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

const hostConfig = {
  key: "hosting detail",
  storage: storage,
  whitelist: ["hosting"],
};

const vpsConfig = {
  key: "vps detail",
  storage: storage,
  whitelist: ["vps"],
};

type userState = ReturnType<typeof reducerUser>;
type pageState = ReturnType<typeof reducerPage>;
type cartState = ReturnType<typeof reducerCart>;
type hostState = ReturnType<typeof redHosting>;
type vpsState = ReturnType<typeof redVPS>;

const reducers = combineReducers({
  user: persistReducer<userState>(userPersistConfig, reducerUser),
  page: persistReducer<pageState>(pagePersistConfig, reducerPage),
  cart: persistReducer<cartState>(cartPersistConfig, reducerCart),
  hosting: persistReducer<hostState>(hostConfig, redHosting),
  vps: persistReducer<vpsState>(vpsConfig, redVPS),
});

export type RootState = ReturnType<typeof reducers>;

// const presistedReducer = persistReducer<RootState>(rootPersistConfig, reducers);

export default reducers;
