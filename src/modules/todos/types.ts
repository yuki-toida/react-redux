import { Action } from "redux";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export type TodosActions = AddTodoAction | ToggleTodoAction;

export type AddTodoPayload = {
  text: string;
};

export interface AddTodoAction extends Action {
  type: typeof ADD_TODO;
  payload: AddTodoPayload;
}

export type ToggleTodoPayload = {
  id: number;
};

export interface ToggleTodoAction extends Action {
  type: typeof TOGGLE_TODO;
  payload: ToggleTodoPayload;
}
