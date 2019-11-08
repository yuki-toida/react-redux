import * as React from "react";
import { List } from "./styled";

type Props = {
  text: string;
  completed: boolean;
  onClick: () => void;
};

const Todo: React.FC<Props> = (props: Props) => {
  return (
    <List completed={props.completed} onClick={props.onClick}>
      {props.text}
    </List>
  );
};

export default Todo;
