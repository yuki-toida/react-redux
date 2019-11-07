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

export const reducer = (state: State = init(), action: TodosActions) => {
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
        todos: state.todos.map(e => {
          return e.id !== action.payload.id
            ? e
            : {
                ...e,
                completed: !e.completed
              };
        })
      };
    default:
      return state;
  }
};
