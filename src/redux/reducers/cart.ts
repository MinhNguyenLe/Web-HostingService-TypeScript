import { Action, CartType } from "../actions";

const stateCart: CartType = {
  buy: {
    domain: [],
    hosting: [],
    vps: [],
    server: [],
  },
  choose: {
    domain: [],
    hosting: [],
    vps: [],
    server: [],
  },
};

export const reducerCart = (
  state: CartType = stateCart,
  action: Action
): CartType => {
  switch (action.type) {
    case "CART_DOMAIN":
      let result1 = { ...state };
      result1.choose.domain = action.payload.domain;
      return result1;
    case "CART_HOSTING":
      let result2 = { ...state };
      result2.choose.hosting = action.payload.hosting;
      return result2;
    case "CART_VPS":
      let result3 = { ...state };
      result3.choose.vps = action.payload.vps;
      return result3;
    case "CART_SERVER":
      let result4 = { ...state };
      result4.choose.server = action.payload.server;
      return result4;
    default:
      return { ...state };
  }
};
