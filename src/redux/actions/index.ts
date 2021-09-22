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
    isPermission: boolean;
  };
}
interface Theme {
  type: "THEME";
  payload: {
    theme: number;
  };
}

export interface DomainType {
  idDomain: string;
  nameUrl: string;
  dot: string;
  product: {
    idProduct: string;
    price: number;
    months: number;
  };
}

interface Cart {
  type: "CART_DOMAIN";
  payload: {
    domain: Array<DomainType>;
  };
}

interface Lang {
  type: "LANG";
  payload: {
    lang: number;
  };
}

export type Action = Buyer | Theme | Lang | Cart;
