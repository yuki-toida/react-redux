import {
  AddTodoPayload,
  AddTodoAction,
  ADD_TODO,
  ToggleTodoAction,
  ToggleTodoPayload,
  TOGGLE_TODO
} from "./types";

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
  return {
    payload,
    type: ADD_TODO
  };
};

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
  return {
    payload,
    type: TOGGLE_TODO
  };
};
