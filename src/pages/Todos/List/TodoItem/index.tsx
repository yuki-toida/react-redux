import React from "react";
import { TodoListItem } from "./styled";
import DeleteTodo from "../DeleteTodo";

type Props = {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<Props> = (props: Props) => {
  return (
    <li>
      <DeleteTodo onClick={props.onDelete} />
      <TodoListItem completed={props.completed} onClick={props.onComplete}>
        {props.text}
      </TodoListItem>
    </li>
  );
};

export default TodoItem;
