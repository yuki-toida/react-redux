import { Action } from "redux";

// すべてのTODOアクション一覧
export type TodosActions = AddTodoAction | ToggleTodoAction;

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
