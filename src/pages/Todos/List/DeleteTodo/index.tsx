import React from "react";

type Props = {
  onClick: () => void;
};

const DeleteTodo: React.FC<Props> = props => {
  return <button onClick={props.onClick}>Delete</button>;
};

export default DeleteTodo;
