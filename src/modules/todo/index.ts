import { TodosActions, ADD_TODO, TOGGLE_TODO } from "./types";

export type State = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
};

const init = (): State => {
  return {
    todos: []
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
            id: state.todos.length,
            text: action.payload.text,
            completed: false
          }
        ]
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
        })
      };
    default:
      return state;
  }
};

export default todoReducer;
