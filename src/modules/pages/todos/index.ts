import { combineReducers } from "redux";
import todosListReducer from "./list";
import todosEditReducer from "./edit";

const todosReducer = combineReducers({
  todosList: todosListReducer,
  todosEdit: todosEditReducer
});

export default todosReducer;
