import { Action } from "../actions";

interface initStatePage {
  theme: number;
}

const statePage: initStatePage = {
  theme: 1, // light : 1, dark : 2
};

export const reducerPage = (
  state: initStatePage = statePage,
  action: Action
): initStatePage => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return { ...state };
  }
};
