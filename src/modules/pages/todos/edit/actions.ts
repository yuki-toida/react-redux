import { GET_TODO, GetTodoPayload, GetTodoAction } from "./types";

export const getTodo = (payload: GetTodoPayload): GetTodoAction => {
  return {
    type: GET_TODO,
    payload: payload
  };
};
