import React from "react";

type Props = {
  onClick: () => void;
};

const FindTodo: React.FC<Props> = props => {
  return <button onClick={props.onClick}>Find</button>;
};

export default FindTodo;
