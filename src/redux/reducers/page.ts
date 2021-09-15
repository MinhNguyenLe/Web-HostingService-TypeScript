import { Action } from "../actions";

interface initStatePage {
  theme: number;
  lang: number;
}

const statePage: initStatePage = {
  theme: 1, // light : 1, dark : 2
  lang: 1, // 1 : en, 2 : vi
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
    case "LANG":
      return {
        ...state,
        lang: action.payload.lang,
      };
    default:
      return { ...state };
  }
};
