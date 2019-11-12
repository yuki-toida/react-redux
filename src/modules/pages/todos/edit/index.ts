import { TodosEditActions, GET_TODO } from "./types";
import { Todo } from "../../../../types/Todo";

export type TodosEditState = {
  todo: Todo;
};

const initTodosEditState = (): TodosEditState => {
  return {
    todo: {
      id: 0,
      title: "",
      completed: false
    }
  };
};

const todosEditReducer = (
  state: TodosEditState = initTodosEditState(),
  action: TodosEditActions
) => {
  switch (action.type) {
    case GET_TODO:
      return {
        todo: action.payload
      };
    default:
      return state;
  }
};

export default todosEditReducer;
