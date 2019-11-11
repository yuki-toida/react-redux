import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodosActions } from "./todo/types";

export const rootReducer = combineReducers({
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes = TodosActions;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
