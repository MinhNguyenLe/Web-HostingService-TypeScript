import { Action } from "../actions";
import { AccountType } from "../action-creators";

const stateUser: AccountType = {
  email: "",
  idBuyer: "",
  idUser: "",
  name: "",
  userName: "",
  quantity: 0,
  typeBuyer: 1,
  isPermission: false,
};

export const reducerUser = (
  state: AccountType = stateUser,
  action: Action
): AccountType => {
  switch (action.type) {
    case "BUYER":
      return {
        ...state,
        email: action.payload.email,
        idBuyer: action.payload.idBuyer,
        idUser: action.payload.idUser,
        name: action.payload.name,
        userName: action.payload.userName,
        quantity: action.payload.quantity,
        typeBuyer: action.payload.typeBuyer,
        isPermission: action.payload.isPermission,
      };
    default:
      return { ...state };
  }
};
