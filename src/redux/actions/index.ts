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

export interface HostingType {
  name: string;
  domain: string;
  website: string;
  support: string[];
  _id: string;
  RAM: string;
  SSDMemory: string;
  bandwidth: string;
  type: string;
  createdAt: Date;
  product: {
    _id: string;
    price: number;
    months: number;
  };
}

export interface HostingDetail {
  hosting: HostingType;
}

interface Domain {
  type: "CART_DOMAIN";
  payload: {
    domain: Array<DomainType>;
  };
}

interface Hosting {
  type: "CART_HOSTING";
  payload: {
    hosting: Array<HostingType>;
  };
}

interface Lang {
  type: "LANG";
  payload: {
    lang: number;
  };
}

interface FocusHosting {
  type: "FOCUS_HOSTING";
  payload: {
    hosting: HostingType;
  };
}

export type Action = Buyer | Theme | Lang | Domain | Hosting | FocusHosting;
