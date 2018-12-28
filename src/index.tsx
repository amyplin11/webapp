import * as React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import basicReducer from "./reducers/basicReducer";
import { storeEnhancers } from "./storeEnhancer";
import { Actions as FarceActions } from "farce";
import { createConnectedRouter, createRender, resolver } from "found";
import { routeConfig } from "./routeConfig";

const store = createStore(basicReducer, {}, storeEnhancers(routeConfig));

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
    <ConnectedRouter resolver={resolver} />
  </Provider>
);
const root = document.getElementById("app");
ReactDom.render(routes, root);

module.hot.accept();
