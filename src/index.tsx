import App from "./App";
import ReactDOM from "react-dom";
import "src/utils/chart";
import * as serviceWorker from "./serviceWorker";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "nprogress/nprogress.css";
import { SidebarProvider } from "./contexts/SidebarContext";

import { Provider } from "react-redux";
import { store, persistor } from "./redux";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
