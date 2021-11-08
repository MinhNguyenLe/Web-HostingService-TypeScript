import { Action, Server } from "../actions";

const stServer: Server = {
  server: {
    name: "",
    SSD: "",
    HDD: "",
    timeSetup: "",
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

export const redServer = (state: Server = stServer, action: Action): Server => {
  switch (action.type) {
    case "FOCUS_SERVER":
      return {
        ...state,
        server: action.payload.server,
      };
    case "LIST_SERVER":
      return {
        ...state,
        list: action.payload.list,
      };
    default:
      return { ...state };
  }
};
