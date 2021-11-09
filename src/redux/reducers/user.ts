import { Action } from "../actions";
import { AccountType } from "../actions";

const stateUser: AccountType = {
  account: {
    token: "",
    _id: "",
    email: "",
    password: "",
    userName: "",
    isPermission: false,
    listIdProduct: [],
    createdAt: new Date(),
  },
};

export const reducerUser = (
  state: AccountType = stateUser,
  action: Action
): AccountType => {
  switch (action.type) {
    case "SET_BUYER":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return { ...state };
  }
};
