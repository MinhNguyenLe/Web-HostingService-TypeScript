import { Dispatch } from "redux";
import { Action, DomainType } from "../actions/index";

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

export interface CartType {
  domain: Array<DomainType>;
}

// export type State = Account | Cart;

export const cartDomain = (domain: Array<DomainType>) => {
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
