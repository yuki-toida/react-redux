import { Action } from "redux";
import { TodosListState } from ".";

// すべてのTODOアクション一覧
export type TodosListActions =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | FindTodoAction;

export const ADD_TODO = "ADD_TODO";
export type AddTodoPayload = {
  title: string;
};
export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  payload: AddTodoPayload;
}

export const TOGGLE_TODO = "TOGGLE_TODO";
export type ToggleTodoPayload = {
  id: number;
};
export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  payload: ToggleTodoPayload;
}

export const DELETE_TODO = "DELETE_TODO";
export type DeleteTodoPayload = {
  id: number;
};
export interface DeleteTodoAction extends Action {
  type: typeof DELETE_TODO;
  payload: DeleteTodoPayload;
}

export const FIND_TODO = "FIND_TODO";
export type FindTodoPayload = TodosListState;
export interface FindTodoAction extends Action {
  type: typeof FIND_TODO;
  payload: FindTodoPayload;
}
