import { makeRouteConfig, Route } from "found";
import App from "./components/App";
import * as React from "react";

export const routeConfig = makeRouteConfig(
  <Route path="/" Component={App}>
    <Route Component={App} />
  </Route>
);
