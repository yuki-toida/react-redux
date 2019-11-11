import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import {
  connectRouter,
  routerMiddleware,
  CallHistoryMethodAction
} from "connected-react-router";
import { createBrowserHistory } from "history";

import { TodoActions } from "./todo/types";
import todoReducer from "./todo";
import { DialogActions } from "./dialog/types";
import dialogReducer from "./dialog";

const logger = createLogger({
  collapsed: true
});

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  todo: todoReducer,
  dialog: dialogReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history)))
);

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes =
  | TodoActions
  | DialogActions
  | CallHistoryMethodAction;

export default store;
