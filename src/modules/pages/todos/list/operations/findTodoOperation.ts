import { ThunkAction } from "redux-thunk";
import Axios, { AxiosError } from "axios";

import { RootState, RootActionTypes } from "modules";
import { findTodo } from "../actions";
import { openDialog } from "modules/dialog/actions";
import { TypicodeTodo, TypicodeTodosUrl } from "types/Typicode";

const findTodoOperation = (): ThunkAction<
  void,
  RootState,
  null,
  RootActionTypes
> => async dispatch => {
  const result = await Axios.get<TypicodeTodo[]>(TypicodeTodosUrl).catch(
    (err: AxiosError) => err
  );

  if (result instanceof Error) {
    dispatch(openDialog({ text: result.message }));
    return;
  }

  const todos = result.data.map(v => {
    return {
      id: v.id,
      title: v.title,
      completed: v.completed
    };
  });
  const nextId = todos.length + 1;

  dispatch(findTodo({ todos: todos, nextId: nextId }));
};

export default findTodoOperation;
