import { DialogActions, OPEN_DIALOG, CLOSE_DIALOG } from "./types";

export type DialogState = {
  isOpen: boolean;
  text: string;
};

const initDialogState = (): DialogState => {
  return {
    isOpen: false,
    text: ""
  };
};

const dialogReducer = (
  state: DialogState = initDialogState(),
  action: DialogActions
) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        isOpen: true,
        text: action.payload.text
      };
    case CLOSE_DIALOG:
      return {
        isOpen: false,
        text: ""
      };
    default:
      return state;
  }
};

export default dialogReducer;
