import {
  TodosListActions,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FIND_TODO
} from "./types";
import { Todo } from "types/Todo";

export type TodosListState = {
  todos: Todo[];
  nextId: number;
};

const initTodosListState = (): TodosListState => {
  return {
    todos: [],
    nextId: 0
  };
};

const todosListReducer = (
  state: TodosListState = initTodosListState(),
  action: TodosListActions
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.nextId++,
            title: action.payload.title,
            completed: false
          }
        ],
        nextId: state.nextId
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id !== action.payload.id
            ? todo
            : {
                ...todo,
                completed: !todo.completed
              };
        }),
        nextId: state.nextId
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id;
        }),
        nextId: state.nextId
      };
    case FIND_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default todosListReducer;
