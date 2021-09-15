import Template from "./Template";

import ReactDOM from "react-dom";
import "src/utils/chart";
import * as serviceWorker from "./serviceWorker";

import "nprogress/nprogress.css";

import { Provider } from "react-redux";
import { store, persistor } from "./redux";

import { PersistGate } from "redux-persist/integration/react";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:444",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <Template></Template>
      </ApolloProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
