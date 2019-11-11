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
  FetchTodoPayload,
  FetchTodoAction,
  FETCH_TODO
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

export const fetchTodo = (payload: FetchTodoPayload): FetchTodoAction => {
  return {
    type: FETCH_TODO,
    payload: payload
  };
};
