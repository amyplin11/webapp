import {
  Actions as FarceActions,
  BrowserProtocol,
  createHistoryEnhancer,
  queryMiddleware
} from "farce";
import { createMatchEnhancer, Matcher } from "found";
import { devToolsEnhancer } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as Immutable from "Immutable";

export const storeEnhancers = routeConfig => {
  let enhancerArray = [
    applyMiddleware(thunk),
    createHistoryEnhancer({
      protocol: new BrowserProtocol(),
      middleware: [queryMiddleware]
    }),
    createMatchEnhancer(new Matcher(routeConfig, { matchStystemRoutes: false }))
  ];

  if (process.env.NODE_ENV === "development" && typeof window === "object") {
    enhancerArray = [
      ...enhancerArray,
      devToolsEnhancer({
        serialize: {
          immutable: Immutable
        }
      } as any)
    ];
  }
};

