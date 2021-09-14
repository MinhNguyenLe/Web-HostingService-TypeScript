import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { themeCreatorLight } from "./base";
import { StylesProvider } from "@material-ui/styles";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  // const curThemeName = localStorage.getItem("appTheme") || "PureDarkTheme";
  const curThemeName = localStorage.getItem("appTheme") || "PureLightTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreatorLight(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
