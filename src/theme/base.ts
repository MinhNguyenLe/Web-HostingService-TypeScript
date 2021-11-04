import React from "react";

import { Theme } from "@material-ui/core";

import { PureLightTheme } from "./schemes/PureLightTheme";
import { PureDarkTheme } from "./schemes/PureDarkTheme";

export function themeCreatorLight(theme: string): Theme {
  return themeLight[theme];
}

export function themeCreatorDark(theme: string): Theme {
  return themeDark[theme];
}

declare module "@material-ui/core/styles" {
  interface Theme {
    customTheme: {
      hostingCard: {
        bg: string;
        promotion: string;
        price: string;
        txInfor: string;
        bgSelect: string;
        iconTick: string;
        lineBottom: string;
      };
    };
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };
    general: {
      reactFrameworkColor: React.CSSProperties["color"];
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
    };
    sidebar: {
      background: React.CSSProperties["color"];
      boxShadow: React.CSSProperties["color"];
      width: string;
      textColor: React.CSSProperties["color"];
      dividerBg: React.CSSProperties["color"];
      menuItemColor: React.CSSProperties["color"];
      menuItemColorActive: React.CSSProperties["color"];
      menuItemBg: React.CSSProperties["color"];
      menuItemBgActive: React.CSSProperties["color"];
      menuItemIconColor: React.CSSProperties["color"];
      menuItemIconColorActive: React.CSSProperties["color"];
      menuItemHeadingColor: React.CSSProperties["color"];
    };
    header: {
      height: string;
      background: React.CSSProperties["color"];
      boxShadow: React.CSSProperties["color"];
      textColor: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    customTheme: {
      hostingCard: {
        bg: string;
        promotion: string;
        price: string;
        txInfor: string;
        bgSelect: string;
        iconTick: string;
        lineBottom: string;
      };
    };
    colors: {
      gradients: {
        blue1: string;
        blue2: string;
        blue3: string;
        orange1: string;
        orange2: string;
        purple1: string;
        pink1: string;
        pink2: string;
        green1: string;
        black1: string;
      };
      shadows: {
        success: string;
        error: string;
        primary: string;
        warning: string;
      };
      alpha: {
        white: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        trueWhite: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
        black: {
          5: string;
          10: string;
          30: string;
          50: string;
          70: string;
          100: string;
        };
      };
      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      success: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      error: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
      info: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };
    };

    general: {
      reactFrameworkColor: React.CSSProperties["color"];
      borderRadiusSm: string;
      borderRadius: string;
      borderRadiusLg: string;
      borderRadiusXl: string;
    };
    sidebar: {
      background: React.CSSProperties["color"];
      boxShadow: React.CSSProperties["color"];
      width: string;
      textColor: React.CSSProperties["color"];
      dividerBg: React.CSSProperties["color"];
      menuItemColor: React.CSSProperties["color"];
      menuItemColorActive: React.CSSProperties["color"];
      menuItemBg: React.CSSProperties["color"];
      menuItemBgActive: React.CSSProperties["color"];
      menuItemIconColor: React.CSSProperties["color"];
      menuItemIconColorActive: React.CSSProperties["color"];
      menuItemHeadingColor: React.CSSProperties["color"];
    };
    header: {
      height: string;
      background: React.CSSProperties["color"];
      boxShadow: React.CSSProperties["color"];
      textColor: React.CSSProperties["color"];
    };
  }
}

const themeLight: { [key: string]: Theme } = {
  PureLightTheme,
};

const themeDark: { [key: string]: Theme } = {
  PureDarkTheme,
};
