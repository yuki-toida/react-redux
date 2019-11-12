import React, { useEffect } from "react";

import FindTodoContainer from "./FindTodo/Container";
import AddTodoContainer from "./AddTodo/Container";
import { Todo } from "../../../types/Todo";
import { TodosListItem } from "./styled";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  findTodo: () => void;
};

const TodosList: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.findTodo();
    // eslint-disable-next-line
  }, []);

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    props.deleteTodo(id);
  };

  const onToggle = (e: React.MouseEvent<HTMLSpanElement>, id: number) => {
    e.preventDefault();
    props.toggleTodo(id);
  };

  return (
    <div>
      <FindTodoContainer />
      <AddTodoContainer />
      <ul>
        {props.todos.map(todo => {
          return (
            <li key={todo.id}>
              <button onClick={e => onDelete(e, todo.id)}>Delete</button>
              <TodosListItem
                completed={todo.completed}
                onClick={e => onToggle(e, todo.id)}
              >
                {todo.id}:{todo.title}
              </TodosListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodosList;
