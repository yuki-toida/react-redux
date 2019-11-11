import { ThunkAction } from "redux-thunk";
import Axios, { AxiosError } from "axios";

import { RootState, RootActionTypes } from "../..";
import { fetchTodo } from "../actions";
import { openDialog } from "../../dialog/actions";

const url = "https://jsonplaceholder.typicode.com/posts";

type typicode = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchTodoOperation = (): ThunkAction<
  void,
  RootState,
  null,
  RootActionTypes
> => async dispatch => {
  const result = await Axios.get<typicode[]>(url).catch(
    (err: AxiosError) => err
  );

  if (result instanceof Error) {
    dispatch(openDialog({ text: result.message }));
    return;
  }

  const todos = result.data.map(v => {
    return {
      id: v.id,
      text: v.title,
      completed: false
    };
  });
  const nextId = todos.length;

  dispatch(fetchTodo({ todos: todos, nextId: nextId }));
};

export default fetchTodoOperation;
