import * as React from "react";

type Props = {
  text: string;
  completed: boolean;
  onClick: () => void;
};

const Todo: React.FC<Props> = (props: Props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? "line-through" : "none"
      }}
    >
      {props.text}
    </li>
  );
};

export default Todo;
