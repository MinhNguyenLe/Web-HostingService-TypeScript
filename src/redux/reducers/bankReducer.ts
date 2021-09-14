import { Action } from "../actions";

// let validators: { [s: string]: action.DepositAction } = {};

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

export default reducer;
