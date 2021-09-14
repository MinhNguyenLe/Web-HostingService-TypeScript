import { ActionType } from "../action-types/index";

// export namespace action{
//   export interface DepositAction {
//     type: ActionType.DEPOSIT;
//     payload: number;
//   }
// }

interface RegisterAction {
  type: ActionType.REGISTER;
  payload: {
    email: string;
    password: string;
  };
}

interface LoginAction {
  type: ActionType.LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

export type Action = RegisterAction | LoginAction;
