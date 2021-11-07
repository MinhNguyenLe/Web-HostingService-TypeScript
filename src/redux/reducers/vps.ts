import { Action, VPS } from "../actions";

const stVPS: VPS = {
  vps: {
    name: "",
    domain: "",
    cloudStorage: "",
    information: "",
    support: [],
    _id: "",
    RAM: "",
    CPU: "",
    bandwidth: "",
    type: "",
    createdAt: new Date(),
    product: {
      _id: "",
      price: 0,
      months: 0,
    },
  },
  list: [],
};

export const redVPS = (state: VPS = stVPS, action: Action): VPS => {
  switch (action.type) {
    case "FOCUS_VPS":
      return {
        ...state,
        vps: action.payload.vps,
      };
    case "LIST_VPS":
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return { ...state };
  }
};
