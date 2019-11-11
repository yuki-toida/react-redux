import React from "react";

type Props = {
  onClick: () => void;
};

const InitTodo: React.FC<Props> = props => {
  return <button onClick={props.onClick}>Init</button>;
};

export default InitTodo;
