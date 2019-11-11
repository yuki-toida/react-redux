import {
  ADD_TODO,
  AddTodoPayload,
  AddTodoAction,
  TOGGLE_TODO,
  ToggleTodoAction,
  ToggleTodoPayload,
  DELETE_TODO,
  DeleteTodoPayload,
  DeleteTodoAction,
  InitTodoPayload,
  InitTodoAction,
  INIT_TODO
} from "./types";

// ContainerからDispatchされるコールバック関数
export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: payload
  };
};

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
  return {
    type: TOGGLE_TODO,
    payload: payload
  };
};

export const deleteTodo = (payload: DeleteTodoPayload): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload: payload
  };
};

export const initTodo = (payload: InitTodoPayload): InitTodoAction => {
  return {
    type: INIT_TODO,
    payload: payload
  };
};
