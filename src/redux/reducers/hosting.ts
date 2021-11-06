import { Action, HostingDetail } from "../actions";

const stHosting: HostingDetail = {
  hosting: {
    name: "",
    domain: "",
    website: "",
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
};

export const redHosting = (
  state: HostingDetail = stHosting,
  action: Action
): HostingDetail => {
  switch (action.type) {
    case "FOCUS_HOSTING":
      return {
        ...state,
        hosting: action.payload.hosting,
      };
    default:
      return { ...state };
  }
};
