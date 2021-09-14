import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

export const register = (account: { email: string; password: string }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER,
      payload: {
        email: account.email,
        password: account.password,
      },
    });
  };
};

export const login = (account: { email: string; password: string }) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
      payload: {
        email: account.email,
        password: account.password,
      },
    });
  };
};
