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

export interface NameDomain {
  name: string;
  dot: string;
}

export interface DomainType {
  _id: string;
  nameUrl: string;
  information: string;
  createdAt: Date;
  dot: string;
  product: {
    _id: string;
    price: number;
    months: number;
  };
}

export interface HostingType {
  name: string;
  domain: string;
  website: string;
  information: string;
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

export interface Hosting {
  hosting: HostingType;
  list: HostingType[];
}

export interface VPSType {
  name: string;
  domain: string;
  cloudStorage: string;
  information: string;
  support: string[];
  _id: string;
  RAM: string;
  CPU: string;
  bandwidth: string;
  type: string;
  createdAt: Date;
  product: {
    _id: string;
    price: number;
    months: number;
  };
}
export interface VPS {
  vps: VPSType;
  list: VPSType[];
}
export interface ServerType {
  name: string;
  SSD: string;
  HDD: string;
  timeSetup: string;
  information: string;
  support: string[];
  _id: string;
  RAM: string;
  CPU: string;
  bandwidth: string;
  type: string;
  createdAt: Date;
  product: {
    _id: string;
    price: number;
    months: number;
  };
}
export interface Server {
  server: ServerType;
  list: ServerType[];
}
interface CartDomain {
  type: "CART_DOMAIN";
  payload: {
    domain: Array<DomainType>;
  };
}

interface CartHosting {
  type: "CART_HOSTING";
  payload: {
    hosting: Array<HostingType>;
  };
}

interface CartVPS {
  type: "CART_VPS";
  payload: {
    vps: Array<VPSType>;
  };
}

interface CartServer {
  type: "CART_SERVER";
  payload: {
    server: Array<ServerType>;
  };
}

interface BuyDomain {
  type: "BUY_DOMAIN";
  payload: {
    domain: Array<DomainType>;
  };
}

interface BuyHosting {
  type: "BUY_HOSTING";
  payload: {
    hosting: Array<HostingType>;
  };
}

interface BuyVPS {
  type: "BUY_VPS";
  payload: {
    vps: Array<VPSType>;
  };
}

interface BuyServer {
  type: "BUY_SERVER";
  payload: {
    server: Array<ServerType>;
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

interface ListHosting {
  type: "LIST_HOSTING";
  payload: {
    list: HostingType[];
  };
}

interface FocusVPS {
  type: "FOCUS_VPS";
  payload: {
    vps: VPSType;
  };
}

interface ListVPS {
  type: "LIST_VPS";
  payload: {
    list: VPSType[];
  };
}

interface FocusServer {
  type: "FOCUS_SERVER";
  payload: {
    server: ServerType;
  };
}

interface ListServer {
  type: "LIST_SERVER";
  payload: {
    list: ServerType[];
  };
}

export interface CartType {
  buy: {
    domain: DomainType[];
    hosting: HostingType[];
    vps: VPSType[];
    server: ServerType[];
  };
  choose: {
    domain: DomainType[];
    hosting: HostingType[];
    vps: VPSType[];
    server: ServerType[];
  };
  totalPrice: number;
}

export interface AccountType {
  email: string;
  idBuyer: string;
  idUser: string;
  name: string;
  userName: string;
  quantity: number;
  typeBuyer: number;
  isPermission: boolean;
}
export interface UserType {
  user: AccountType;
}

export interface TotalPrice {
  type: "SET_TOTAL_PRICE";
  payload: {
    total: number;
  };
}

export type Action =
  | TotalPrice
  | Buyer
  | Theme
  | Lang
  | CartDomain
  | CartServer
  | CartVPS
  | CartHosting
  | BuyDomain
  | BuyServer
  | BuyVPS
  | BuyHosting
  | FocusHosting
  | ListHosting
  | FocusVPS
  | ListVPS
  | FocusServer
  | ListServer;
