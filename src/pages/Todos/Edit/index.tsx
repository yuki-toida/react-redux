import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { Todo } from "../../../types/Todo";

type Props = {
  todo: Todo;
  getTodo: (id: number) => void;
};

const TodosEdit: React.FC<Props> = (props: Props) => {
  const params = useParams<{ id: string }>();
  const todoId = parseInt(params.id);

  useEffect(() => {
    props.getTodo(todoId);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Link to="/todos">List</Link>
      <dl>
        <dt>Id</dt>
        <dd>{props.todo.id}</dd>
        <dt>Title</dt>
        <dd>{props.todo.title}</dd>
        <dt>Completed</dt>
        <dd>{props.todo.completed ? "O" : "X"}</dd>
      </dl>
    </div>
  );
};

export default TodosEdit;
