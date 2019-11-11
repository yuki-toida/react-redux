import { Action } from "redux";

export type DialogActions = OpenDialogAction | CloseDialogAction;

export const OPEN_DIALOG = "OPEN_DIALOG";
export type OpenDialogPayload = {
  text: string;
};
export interface OpenDialogAction extends Action {
  type: typeof OPEN_DIALOG;
  payload: OpenDialogPayload;
}

export const CLOSE_DIALOG = "CLOSE_DIALOG";
export interface CloseDialogAction extends Action {
  type: typeof CLOSE_DIALOG;
}
