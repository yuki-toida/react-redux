import {
  OPEN_DIALOG,
  OpenDialogPayload,
  OpenDialogAction,
  CLOSE_DIALOG,
  CloseDialogAction
} from "./types";

export const openDialog = (payload: OpenDialogPayload): OpenDialogAction => {
  return {
    type: OPEN_DIALOG,
    payload: payload
  };
};

export const closeDialog = (): CloseDialogAction => {
  return {
    type: CLOSE_DIALOG
  };
};
