// export namespace action{
//   export interface DepositAction {
//     type: ActionType.DEPOSIT;
//     payload: number;
//   }
// }

interface Register {
  type: "REGISTER";
  payload: {
    email: string;
    password: string;
  };
}

interface LoginAction {
  type: "LOGIN";
  payload: {
    email: string;
    password: string;
  };
}

interface Theme {
  type: "THEME";
  payload: {
    theme: number;
  };
}

interface Lang {
  type: "LANG";
  payload: {
    lang: number;
  };
}

export type Action = Register | LoginAction | Theme | Lang;
