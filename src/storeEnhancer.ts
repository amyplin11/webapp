import { BrowserProtocol, createHistoryEnhancer, queryMiddleware } from "farce";
import { Matcher, createMatchEnhancer } from "found";
import { devToolsEnhancer } from "redux-devtools-extension";
import { applyMiddleware, compose } from "redux";
import { middleware } from "./middleware";
import thunk from "redux-thunk";
import * as Immutable from "Immutable";

const storeEnhancers = routeConfig => {
  if (process.env.NODE_ENV === "development" && typeof window === "object") {
    return compose(
      applyMiddleware(thunk, ...middleware),
      createHistoryEnhancer({
        protocol: new BrowserProtocol(),
        middleware: [queryMiddleware]
      }),
      createMatchEnhancer(new Matcher(routeConfig, { matchStemRoutes: false })),
      devToolsEnhancer({
        serialize: {
          immutable: Immutable
        }
      } as any)
    );
  }
  return compose(
    applyMiddleware(thunk, ...middleware),
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middleware: [queryMiddleware]
    }),
    createMatchEnhancer(new Matcher(routeConfig, { matchStemRoutes: false }))
  );
};

export default storeEnhancers;
