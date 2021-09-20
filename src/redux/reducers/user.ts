import { Action } from "../actions";
import { State } from "../action-creators";

const stateUser: State = {
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
  state: State = stateUser,
  action: Action
): State => {
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
