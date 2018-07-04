import React from "react";
import ReactDOM from "react-dom";
import ReduxPromise from "redux-promise";
import "./index.css";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import history from "./components/history";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
