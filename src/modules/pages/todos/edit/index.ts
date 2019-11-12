import { TodosEditActions } from "./types";
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
    default:
      return state;
  }
};

export default todosEditReducer;
