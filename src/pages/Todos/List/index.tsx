import React from "react";
import TodoItem from "./TodoItem";
import DialogContainer from "../../../components/Dialog/Container";
import FetchTodoContainer from "./FetchTodo/Container";
import AddTodoContainer from "./AddTodo/Container";

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
    <div>
      <DialogContainer />
      <FetchTodoContainer />
      <AddTodoContainer />
      <ul>
        {props.todos.map(todo => {
          return (
            <TodoItem
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
    </div>
  );
};

export default TodoList;
