import { ThunkAction } from "redux-thunk";
import Axios, { AxiosError } from "axios";

import { RootState, RootActionTypes } from "../../../..";
import { getTodo } from "../../edit/actions";
import { openDialog } from "../../../../dialog/actions";
import { TypicodeTodo, TypicodeTodosUrl } from "../../../../../types/Typicode";

const getTodoOperation = (
  id: number
): ThunkAction<void, RootState, null, RootActionTypes> => async dispatch => {
  const url = TypicodeTodosUrl + "/" + id;
  const result = await Axios.get<TypicodeTodo>(url).catch(
    (err: AxiosError) => err
  );

  if (result instanceof Error) {
    dispatch(openDialog({ text: result.message }));
    return;
  }

  dispatch(
    getTodo({
      id: result.data.id,
      title: result.data.title,
      completed: result.data.completed
    })
  );
};

export default getTodoOperation;
