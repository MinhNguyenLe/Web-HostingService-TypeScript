import App from "./App";
import "src/utils/chart";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "nprogress/nprogress.css";
import { SidebarProvider } from "./contexts/SidebarContext";

const Template = () => {
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
