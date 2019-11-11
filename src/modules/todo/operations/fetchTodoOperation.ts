import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState, RootActionTypes } from "../..";
import { fetchTodo } from "../actions";

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
  try {
    const res = await axios.get<typicode[]>(url);
    const todos = res.data.map(v => {
      return {
        id: v.id,
        text: v.title,
        completed: false
      };
    });
    const nextId = todos.length;
    dispatch(fetchTodo({ todos: todos, nextId: nextId }));
  } catch (error) {
    console.log(error);
  }
};

export default fetchTodoOperation;
