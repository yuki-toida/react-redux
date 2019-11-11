import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { TodoActions } from "./todo/types";
import todoReducer from "./todo";
import { DialogActions } from "./dialog/types";
import dialogReducer from "./dialog";

const logger = createLogger({
  collapsed: true
});

const rootReducer = combineReducers({
  todo: todoReducer,
  dialog: dialogReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes = TodoActions | DialogActions;

export default store;
