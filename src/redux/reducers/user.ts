import { Action } from "../actions";
import { BuyerState } from "../actions";

const stateUser: BuyerState = {
  account: {
    token: "",
    _id: "",
    user: {
      _id: "",
      email: "",
      password: "",
      userName: "",
      isPermission: false,
      listIdProduct: [],
    },
    name: "",
    type: "",
    quantity: 0,
    information: "",
    contact: "",
    createdAt: new Date(),
  },
};

export const reducerUser = (
  state: BuyerState = stateUser,
  action: Action
): BuyerState => {
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
