import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import basic from "./reducers/basic";
import storeEnhancers from "./storeEnhancer";
import { Actions as FarceActions } from "farce";
import {
  createConnectedRouter,
  createRender,
  foundReducer,
  resolver
} from "found";
import { routeConfig } from "./routeConfig";

const store = createStore(
  combineReducers({ found: foundReducer, basic }),
  {},
  storeEnhancers(routeConfig)
);

store.dispatch(FarceActions.init());

const ConnectedRouter = createConnectedRouter({
  render: createRender({
    renderError: ({ error }) => (
      <div>{error.status === 404 ? "Not found" : "Error"}</div>
    )
  })
});

const routes = (
  <Provider store={store}>
    <ConnectedRouter matchContext={{ store }} resolver={resolver} />
  </Provider>
);

const root = document.getElementById("app");
render(routes, root);

module.hot.accept();
