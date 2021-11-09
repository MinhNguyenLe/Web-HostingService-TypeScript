import { Dispatch } from "redux";
import {
  Action,
  DomainType,
  HostingType,
  VPSType,
  ServerType,
  CartType,
  UserType,
  BuyerType,
} from "../actions/index";

// export type State = Account | Cart;

export const cartHosting = (hosting: Array<HostingType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "CART_HOSTING",
      payload: {
        hosting: hosting,
      },
    });
  };
};

export const cartDomain = (domain: Array<DomainType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "CART_DOMAIN",
      payload: {
        domain: domain,
      },
    });
  };
};

export const cartVPS = (vps: Array<VPSType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "CART_VPS",
      payload: {
        vps: vps,
      },
    });
  };
};

export const cartServer = (server: Array<ServerType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "CART_SERVER",
      payload: {
        server: server,
      },
    });
  };
};

export const buyHosting = (hosting: Array<HostingType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "BUY_HOSTING",
      payload: {
        hosting: hosting,
      },
    });
  };
};

export const buyDomain = (domain: Array<DomainType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "BUY_DOMAIN",
      payload: {
        domain: domain,
      },
    });
  };
};

export const buyVPS = (vps: Array<VPSType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "BUY_VPS",
      payload: {
        vps: vps,
      },
    });
  };
};

export const buyServer = (server: Array<ServerType>) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "BUY_SERVER",
      payload: {
        server: server,
      },
    });
  };
};

export const setTotalPrice = (total: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "SET_TOTAL_PRICE",
      payload: {
        total: total,
      },
    });
  };
};

export const buyerRedux = (account: BuyerType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "SET_BUYER",
      payload: {
        account: account,
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

export const focusHosting = (item: HostingType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "FOCUS_HOSTING",
      payload: {
        hosting: item,
      },
    });
  };
};

export const listHosting = (list: HostingType[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "LIST_HOSTING",
      payload: {
        list: list,
      },
    });
  };
};

export const focusVPS = (item: VPSType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "FOCUS_VPS",
      payload: {
        vps: item,
      },
    });
  };
};

export const listVPS = (list: VPSType[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "LIST_VPS",
      payload: {
        list: list,
      },
    });
  };
};

export const focusServer = (item: ServerType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "FOCUS_SERVER",
      payload: {
        server: item,
      },
    });
  };
};

export const listServer = (list: ServerType[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "LIST_SERVER",
      payload: {
        list: list,
      },
    });
  };
};
