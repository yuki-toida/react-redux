import { Action } from "redux";
import { Todo } from "../../../../types/Todo";

export type TodosEditActions = GetTodoAction;

export const GET_TODO = "GET_TODO";
export type GetTodoPayload = Todo;
export interface GetTodoAction extends Action {
  type: typeof GET_TODO;
  payload: GetTodoPayload;
}
