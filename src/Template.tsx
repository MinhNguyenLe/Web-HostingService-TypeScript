import { useEffect } from "react";
import App from "./App";
import "src/utils/chart";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "nprogress/nprogress.css";
import { SidebarProvider } from "./contexts/SidebarContext";

import i18n from "i18next";

import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const Template = () => {
  const dispatch = useDispatch();

  const { lang } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (i18n.languages[0] === "en") lang(1);
    else lang(2);
  }, []);
  return (
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  );
};
export default Template;
