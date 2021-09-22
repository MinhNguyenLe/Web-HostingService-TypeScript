import { Dispatch } from "redux";
import { Action } from "../actions/index";

export interface AccountType {
  email: string;
  idBuyer: string;
  idUser: string;
  name: string;
  userName: string;
  quantity: number;
  typeBuyer: number;
  isPermission: boolean;
}

export interface DomainType {
  idDomain: string;
  nameUrl: string;
  dot: string;
  product: {
    idProduct: string;
    price: number;
    months: number;
  };
}

export interface CartType {
  domain: [Object];
}

// export type State = Account | Cart;

export const cartDomain = (domain: [Object]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "CART_DOMAIN",
      payload: {
        domain: domain,
      },
    });
  };
};

export const buyerRedux = (account: AccountType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "BUYER",
      payload: {
        email: account.email,
        idBuyer: account.idBuyer,
        idUser: account.idUser,
        name: account.name,
        userName: account.userName,
        quantity: account.quantity,
        typeBuyer: account.typeBuyer,
        isPermission: account.isPermission,
      },
    });
  };
};

export const theme = (theme: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "THEME",
      payload: {
        theme: theme,
      },
    });
  };
};

export const lang = (lang: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "LANG",
      payload: {
        lang: lang,
      },
    });
  };
};
