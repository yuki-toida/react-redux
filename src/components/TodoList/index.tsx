import * as React from "react";
import Todo from "../Todo";

type Props = {
  // mapStateToProps
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  // mapDispatchToProps
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = (props: Props) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              props.toggleTodo(todo.id);
            }}
            onDelete={() => {
              props.deleteTodo(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
