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
  totalPrice: 0,
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
    case "BUY_DOMAIN":
      let result5 = { ...state };
      result5.buy.domain = action.payload.domain;
      return result5;
    case "BUY_HOSTING":
      let result6 = { ...state };
      result6.buy.hosting = action.payload.hosting;
      return result6;
    case "BUY_VPS":
      let result7 = { ...state };
      result7.buy.vps = action.payload.vps;
      return result7;
    case "BUY_SERVER":
      let result8 = { ...state };
      result8.buy.server = action.payload.server;
      return result8;
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload.total,
      };
    default:
      return { ...state };
  }
};
