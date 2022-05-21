import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

let storeConfig;

if (process.env.NODE_ENV === "development") {
  storeConfig = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  storeConfig = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middleware))
  );
}

export const store = storeConfig;
