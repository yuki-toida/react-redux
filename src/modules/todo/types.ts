import { Action } from "redux";
import { TodoState } from ".";

// すべてのTODOアクション一覧
export type TodoActions =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction
  | FetchTodoAction;

// TODO追加アクションを判定するキー
export const ADD_TODO = "ADD_TODO";
// TODO追加アクションの引数
export type AddTodoPayload = {
  text: string;
};
// TODO追加アクションのReduxAction
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

export const FETCH_TODO = "FETCH_TODO";
export type FetchTodoPayload = TodoState;
export interface FetchTodoAction extends Action {
  type: typeof FETCH_TODO;
  payload: FetchTodoPayload;
}
