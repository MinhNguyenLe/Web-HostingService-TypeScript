import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : (f) => f
  )
);

export const persistor = persistStore(store);
