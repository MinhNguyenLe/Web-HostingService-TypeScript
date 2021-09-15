import { Action } from "../actions";

interface initStateUser {
  email: string;
  password: string;
}

const stateUser: initStateUser = {
  email: "",
  password: "",
};

export const reducerUser = (
  state: initStateUser = stateUser,
  action: Action
): initStateUser => {
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
    default:
      return { ...state };
  }
};
