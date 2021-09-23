import { Action } from "../actions";
import { CartType } from "../action-creators";

const stateCart: CartType = {
  domain: [
    // {
    //   idDomain: "",
    //   nameUrl: "",
    //   dot: "",
    //   product: {
    //     idProduct: "",
    //     price: 0,
    //     months: 12,
    //   },
    // },
  ],
  hosting: [
    // {
    //   idHosting: "",
    //   RAM: "",
    //   type: "",
    //   bandwidth: "",
    //   SSDMemory: "",
    //   product: {
    //     idProduct: "",
    //     price: 0,
    //     months: 12,
    //   },
    // },
  ],
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
