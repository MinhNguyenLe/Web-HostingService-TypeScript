import { ActionType } from "../action-types/index";
import { Action } from "../actions";

// let validators: { [s: string]: action.DepositAction } = {};

interface initState {
  email: string;
  password: string;
}

const initialState: initState = {
  email: "default",
  password: "",
};

const reducer = (
  state: initState = initialState,
  action: Action
): initState => {
  switch (action.type) {
    case ActionType.REGISTER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

export default reducer;
