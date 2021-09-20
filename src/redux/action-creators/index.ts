import { Dispatch } from "redux";
import { Action } from "../actions/index";

interface Account {
  email: string;
  idBuyer: string;
  idUser: string;
  name: string;
  userName: string;
  quantity: number;
  typeBuyer: number;
  isPermission: Boolean;
}

export type State = Account;

export const buyerRedux = (account: Account) => {
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
