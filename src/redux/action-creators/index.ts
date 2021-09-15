import { Dispatch } from "redux";
import { Action } from "../actions/index";

interface Account {
  email: string;
  password: string;
}

export const register = (account: Account) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "REGISTER",
      payload: {
        email: account.email,
        password: account.password,
      },
    });
  };
};

export const login = (account: Account) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "LOGIN",
      payload: {
        email: account.email,
        password: account.password,
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
