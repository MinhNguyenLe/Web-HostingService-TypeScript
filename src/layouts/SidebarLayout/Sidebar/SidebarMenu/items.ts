import { ReactNode } from "react";

import DesignServicesTwoToneIcon from "@material-ui/icons/DesignServicesTwoTone";
import BrightnessLowTwoToneIcon from "@material-ui/icons/BrightnessLowTwoTone";
import MmsTwoToneIcon from "@material-ui/icons/MmsTwoTone";
import TableChartTwoToneIcon from "@material-ui/icons/TableChartTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import BallotTwoToneIcon from "@material-ui/icons/BallotTwoTone";
import BeachAccessTwoToneIcon from "@material-ui/icons/BeachAccessTwoTone";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import HowToVoteTwoToneIcon from "@material-ui/icons/HowToVoteTwoTone";
import LocalPharmacyTwoToneIcon from "@material-ui/icons/LocalPharmacyTwoTone";
import RedeemTwoToneIcon from "@material-ui/icons/RedeemTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import TrafficTwoToneIcon from "@material-ui/icons/TrafficTwoTone";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItemsWithPermission = (isPermission: boolean): MenuItems[] => {
  const itemManagement = [
    {
      name: "Cart",
      icon: TableChartTwoToneIcon,
      link: "/management/cart",
    },
    {
      name: "Transactions",
      icon: TableChartTwoToneIcon,
      link: "/management/transactions",
    },
    {
      name: "Admin",
      icon: TableChartTwoToneIcon,
      link: "/management/admin",
      items: [
        {
          name: "Register Domain",
          link: "/management/domain",
        },
        {
          name: "Cloud Hosting",
          link: "/management/hosting",
        },
        {
          name: "VPS(Virtual private server)",
          link: "/management/vps",
        },
        {
          name: "Server",
          link: "/management/server",
        },
        {
          name: "Customer",
          link: "/management/customer",
        },
        {
          name: "Products are using",
          link: "/management/user-product",
        },
        {
          name: "Statistic",
          link: "/management/statistic",
        },
      ],
    },
    {
      name: "User Profile",
      icon: AccountCircleTwoToneIcon,
      link: "/management/buyer",
      items: [
        {
          name: "Your Products",
          link: "/management/buyer/products",
        },
        {
          name: "Profile Details",
          link: "/management/buyer/profile",
        },
        {
          name: "User Settings",
          link: "/management/buyer/settings",
        },
      ],
    },
  ];
  let newItems = [];
  if (!isPermission)
    newItems = itemManagement.filter((i) => i.link !== "/management/admin");
  else newItems = [...itemManagement];

  return [
    {
      heading: "",
      items: [
        {
          name: "Overview",
          link: "/overview",
          icon: DesignServicesTwoToneIcon,
        },
      ],
    },
    {
      heading: "account",
      items: [
        {
          name: "Login",
          link: "/account/login",
          icon: DesignServicesTwoToneIcon,
        },
        {
          name: "Register",
          link: "/account/register",
          icon: DesignServicesTwoToneIcon,
        },
      ],
    },
    {
      heading: "Products",
      items: [
        {
          name: "Hosting",
          link: "/product/hosting",
          icon: DesignServicesTwoToneIcon,
        },
        {
          name: "Domain",
          link: "/product/domain",
          icon: DesignServicesTwoToneIcon,
        },
        {
          name: "Cloud VPS",
          link: "/product/vps",
          icon: DesignServicesTwoToneIcon,
        },
        {
          name: "Server",
          link: "/product/server",
          icon: DesignServicesTwoToneIcon,
        },
      ],
    },
    {
      heading: "Management",
      items: newItems,
    },
    {
      heading: "Dashboards",
      items: [
        {
          name: "Crypto",
          link: "/dashboards/crypto",
          icon: BrightnessLowTwoToneIcon,
        },
        {
          name: "Messenger",
          icon: MmsTwoToneIcon,
          link: "/dashboards/messenger",
        },
      ],
    },
    {
      heading: "Components",
      items: [
        {
          name: "Buttons",
          icon: BallotTwoToneIcon,
          link: "/components/buttons",
        },
        {
          name: "Modals",
          icon: BeachAccessTwoToneIcon,
          link: "/components/modals",
        },
        {
          name: "Accordions",
          icon: EmojiEventsTwoToneIcon,
          link: "/components/accordions",
        },
        {
          name: "Tabs",
          icon: FilterVintageTwoToneIcon,
          link: "/components/tabs",
        },
        {
          name: "Badges",
          icon: HowToVoteTwoToneIcon,
          link: "/components/badges",
        },
        {
          name: "Tooltips",
          icon: LocalPharmacyTwoToneIcon,
          link: "/components/tooltips",
        },
        {
          name: "Avatars",
          icon: RedeemTwoToneIcon,
          link: "/components/avatars",
        },
        {
          name: "Cards",
          icon: SettingsTwoToneIcon,
          link: "/components/cards",
        },
        {
          name: "Forms",
          icon: TrafficTwoToneIcon,
          link: "/components/forms",
        },
      ],
    },
    {
      heading: "Extra Pages",
      items: [
        {
          name: "Status",
          icon: VerifiedUserTwoToneIcon,
          link: "/status",
          items: [
            {
              name: "Error 404",
              link: "/status/404",
            },
            {
              name: "Error 500",
              link: "/status/500",
            },
            {
              name: "Maintenance",
              link: "/status/maintenance",
            },
            {
              name: "Coming Soon",
              link: "/status/coming-soon",
            },
          ],
        },
      ],
    },
  ];
};
export default menuItemsWithPermission;
