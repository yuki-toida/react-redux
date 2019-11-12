import React from "react";

import { AButton } from "movo_ui";

type Props = {
  onClick: () => void;
};

const FindTodo: React.FC<Props> = props => {
  return <AButton onClick={props.onClick}>Find</AButton>;
};

export default FindTodo;
