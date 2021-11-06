import { Action } from "../actions";
import { CartType } from "../action-creators";

const stateCart: CartType = {
  domain: [],
  hosting: [],
};

export const reducerCart = (
  state: CartType = stateCart,
  action: Action
): CartType => {
  switch (action.type) {
    case "CART_DOMAIN":
      return {
        ...state,
        domain: action.payload.domain,
      };
    case "CART_HOSTING":
      return {
        ...state,
        hosting: action.payload.hosting,
      };
    default:
      return { ...state };
  }
};
