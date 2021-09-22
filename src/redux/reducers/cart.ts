import { Action } from "../actions";
import { CartType } from "../action-creators";

const stateCart: CartType = {
  domain: [
    {
      idDomain: "",
      nameUrl: "",
      dot: "",
      product: {
        idProduct: "",
        price: 0,
        months: 12,
      },
    },
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
    default:
      return { ...state };
  }
};
