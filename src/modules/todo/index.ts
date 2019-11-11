import {
  TodosActions,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  INIT_TODO
} from "./types";

export type State = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  nextId: number;
};

const init = (): State => {
  return {
    todos: [],
    nextId: 0
  };
};

// TDOOアクションが発火した時に、現在のStateとActionを受け取り、新しいStateを返す
const todoReducer = (state: State = init(), action: TodosActions) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.nextId++,
            text: action.payload.text,
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
    case INIT_TODO:
      return {
        todos: action.payload,
        nextId: 0
      };
    default:
      return state;
  }
};

export default todoReducer;
