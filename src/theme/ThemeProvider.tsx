import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { themeCreatorLight, themeCreatorDark } from "./base";
import { StylesProvider } from "@material-ui/styles";

import { RootState } from "src/redux/reducers";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const themeRedux = useSelector((state: RootState) => state.page.theme);

  const curThemeName = themeRedux === 1 ? "PureLightTheme" : "PureDarkTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme =
    themeRedux === 1
      ? themeCreatorLight(themeName)
      : themeCreatorDark(themeName);
  const setThemeName = (themeName: string): void => {
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
