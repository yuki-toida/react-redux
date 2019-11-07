import { combineReducers } from "redux";
import * as Todos from "./todos";

export const rootReducer = combineReducers({
  todos: Todos.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
