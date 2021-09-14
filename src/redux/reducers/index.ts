import { Action } from "../actions";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  // whitelist: ["email"],
};

interface initState {
  email: string;
  password: string;
  theme: number;
}

const initialState: initState = {
  email: "",
  password: "",
  theme: 1, // light : 1, dark : 2
};

const reducer = (
  state: initState = initialState,
  action: Action
): initState => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return { ...state };
  }
};
export type RootState = ReturnType<typeof reducer>;

const presistedReducer = persistReducer<RootState>(persistConfig, reducer);
export default presistedReducer;
