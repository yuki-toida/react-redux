import React from "react";

type Props = {
  onClick: () => void;
};

const FetchTodo: React.FC<Props> = props => {
  return <button onClick={props.onClick}>Fetch</button>;
};

export default FetchTodo;
