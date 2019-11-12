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

import todosReducer from "./pages/todos";
import { DialogActions } from "./dialog/types";
import dialogReducer from "./dialog";
import { TodosListActions } from "./pages/todos/list/types";
import { TodosEditActions } from "./pages/todos/edit/types";

const logger = createLogger({
  collapsed: true
});

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  todos: todosReducer,
  dialog: dialogReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, routerMiddleware(history)))
);

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes =
  | DialogActions
  | CallHistoryMethodAction
  | TodosListActions
  | TodosEditActions;

export default store;
