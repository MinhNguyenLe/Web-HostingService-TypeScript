interface Buyer {
  type: "BUYER";
  payload: {
    email: string;
    idBuyer: string;
    idUser: string;
    name: string;
    userName: string;
    quantity: number;
    typeBuyer: number;
    isPermission: Boolean;
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

export type Action = Buyer | Theme | Lang;
