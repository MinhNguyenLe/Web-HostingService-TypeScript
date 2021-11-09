import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { PartialRouteObject } from "react-router";

import SidebarLayout from "src/layouts/SidebarLayout";
import BaseLayout from "src/layouts/BaseLayout";

import SuspenseLoader from "src/components/SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

//test
// const Test = Loader(lazy(() => import("src/components/...")));

//cart
const ViewCart = Loader(lazy(() => import("src/content/cart/ViewCart")));
const Payment = Loader(lazy(() => import("src/content/cart/Payment")));

//admin
const AdminHosting = Loader(
  lazy(() => import("src/content/admin/AdminHosting"))
);
const AdminVPS = Loader(lazy(() => import("src/content/admin/AdminVPS")));
const AdminServer = Loader(lazy(() => import("src/content/admin/AdminServer")));

const Management = Loader(lazy(() => import("src/content/admin/Management")));
const Customer = Loader(lazy(() => import("src/content/admin/Customer")));

//product
const Domain = Loader(lazy(() => import("src/content/product/Domain")));
const Hosting = Loader(lazy(() => import("src/content/product/Hosting")));
const VPS = Loader(lazy(() => import("src/content/product/VPS")));
const Server = Loader(lazy(() => import("src/content/product/Server")));

// login
const Login = Loader(lazy(() => import("src/content/account/Login")));
const Register = Loader(lazy(() => import("src/content/account/Register")));

// Pages

const Overview = Loader(lazy(() => import("src/content/overview")));
// Dashboards

const Crypto = Loader(lazy(() => import("src/content/dashboards/Crypto")));

// Applications

const Messenger = Loader(
  lazy(() => import("src/content/applications/Messenger"))
);
const Transactions = Loader(
  lazy(() => import("src/content/applications/Transactions"))
);
const UserProfile = Loader(lazy(() => import("src/content/buyer/Profile")));
const UserSettings = Loader(lazy(() => import("src/content/buyer/Settings")));
const UserProduct = Loader(lazy(() => import("src/content/buyer/Products")));

// Components

const Buttons = Loader(
  lazy(() => import("src/content/pages/Components/Buttons"))
);
const Modals = Loader(
  lazy(() => import("src/content/pages/Components/Modals"))
);
const Accordions = Loader(
  lazy(() => import("src/content/pages/Components/Accordions"))
);
const Tabs = Loader(lazy(() => import("src/content/pages/Components/Tabs")));
const Badges = Loader(
  lazy(() => import("src/content/pages/Components/Badges"))
);
const Tooltips = Loader(
  lazy(() => import("src/content/pages/Components/Tooltips"))
);
const Avatars = Loader(
  lazy(() => import("src/content/pages/Components/Avatars"))
);
const Cards = Loader(lazy(() => import("src/content/pages/Components/Cards")));
const Forms = Loader(lazy(() => import("src/content/pages/Components/Forms")));

// Status

const Status404 = Loader(
  lazy(() => import("src/content/pages/Status/Status404"))
);
const Status500 = Loader(
  lazy(() => import("src/content/pages/Status/Status500"))
);
const StatusComingSoon = Loader(
  lazy(() => import("src/content/pages/Status/ComingSoon"))
);
const StatusMaintenance = Loader(
  lazy(() => import("src/content/pages/Status/Maintenance"))
);

const checkPermissionRouter = (isPermission: boolean): PartialRouteObject[] => {
  const arrayManagementPath = [
    {
      path: "/",
      element: <Navigate to="/management/transactions" replace />,
    },
    {
      path: "/",
      element: <Navigate to="/hosting" replace />,
    },
    {
      path: "hosting",
      element: <AdminHosting />,
    },
    {
      path: "vps",
      element: <AdminVPS />,
    },
    {
      path: "server",
      element: <AdminServer />,
    },
    {
      path: "customer",
      element: <Customer />,
    },
    {
      path: "user-product",
      element: <Management />,
    },
    {
      path: "statistic",
      element: <Transactions />,
    },
    {
      path: "cart",
      element: <ViewCart />,
    },
    {
      path: "cart/payment",
      element: <Payment />,
    },
    {
      path: "transactions",
      element: <Transactions />,
    },
    {
      path: "buyer",
      children: [
        {
          path: "/",
          element: <Navigate to="profile" replace />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "settings",
          element: <UserSettings />,
        },
        {
          path: "products",
          element: <UserProduct />,
        },
      ],
    },
  ];
  let pathUser = [];
  if (!isPermission)
    pathUser = arrayManagementPath.filter((item) => item.path !== "admin");
  else pathUser = [...arrayManagementPath];
  return [
    {
      path: "*",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Overview />,
        },
        {
          path: "overview",
          element: <Navigate to="/" replace />,
        },
        {
          path: "account",
          element: <Navigate to="/account/login" replace />,
        },
        {
          path: "login",
          element: <Navigate to="/account/login" replace />,
        },
        {
          path: "register",
          element: <Navigate to="/account/register" replace />,
        },
        // {
        //   path: "test",
        //   element: <Test to="/test" replace />,
        // },
        {
          path: "status",
          children: [
            {
              path: "/",
              element: <Navigate to="404" replace />,
            },
            {
              path: "404",
              element: <Status404 />,
            },
            {
              path: "500",
              element: <Status500 />,
            },
            {
              path: "maintenance",
              element: <StatusMaintenance />,
            },
            {
              path: "coming-soon",
              element: <StatusComingSoon />,
            },
          ],
        },
        {
          path: "*",
          element: <Status404 />,
        },
      ],
    },
    {
      path: "account",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/account/login" replace />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "product",
      element: <SidebarLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/product/domain" replace />,
        },
        {
          path: "domain",
          element: <Domain />,
        },
        {
          path: "hosting",
          element: <Hosting />,
        },
        {
          path: "vps",
          element: <VPS />,
        },
        {
          path: "server",
          element: <Server />,
        },
      ],
    },
    {
      path: "management",
      element: <SidebarLayout />,
      children: pathUser,
    },
    {
      path: "dashboards",
      element: <SidebarLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboards/crypto" replace />,
        },
        {
          path: "crypto",
          element: <Crypto />,
        },
        {
          path: "messenger",
          element: <Messenger />,
        },
      ],
    },
    {
      path: "components",
      element: <SidebarLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/components/buttons" replace />,
        },
        {
          path: "buttons",
          element: <Buttons />,
        },
        {
          path: "modals",
          element: <Modals />,
        },
        {
          path: "accordions",
          element: <Accordions />,
        },
        {
          path: "tabs",
          element: <Tabs />,
        },
        {
          path: "badges",
          element: <Badges />,
        },
        {
          path: "tooltips",
          element: <Tooltips />,
        },
        {
          path: "avatars",
          element: <Avatars />,
        },
        {
          path: "cards",
          element: <Cards />,
        },
        {
          path: "forms",
          element: <Forms />,
        },
      ],
    },
  ];
};
export default checkPermissionRouter;
