import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
  // {},
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  //     : (f) => f
  // )
);

export const persistor = persistStore(store);
