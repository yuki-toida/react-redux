import {
  ADD_TODO,
  AddTodoPayload,
  AddTodoAction,
  TOGGLE_TODO,
  ToggleTodoAction,
  ToggleTodoPayload
} from "./types";

// ContainerからDispatchされるコールバック関数
export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    payload
  };
};
