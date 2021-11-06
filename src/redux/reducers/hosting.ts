import { Action, Hosting } from "../actions";

const stHosting: Hosting = {
  hosting: {
    name: "",
    domain: "",
    website: "",
    information: "",
    support: [],
    _id: "",
    RAM: "",
    SSDMemory: "",
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

export const redHosting = (
  state: Hosting = stHosting,
  action: Action
): Hosting => {
  switch (action.type) {
    case "FOCUS_HOSTING":
      return {
        ...state,
        hosting: action.payload.hosting,
      };
    case "LIST_HOSTING":
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return { ...state };
  }
};
