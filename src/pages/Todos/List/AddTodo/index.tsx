import React, { useState } from "react";

import { AButton } from "movo-ui";

type Props = {
  onSubmit: (text: string) => void;
};

const AddTodo: React.FC<Props> = props => {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputText.trim();
    if (text === "") {
      return;
    }
    props.onSubmit(text);
    setInputText("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={inputText} />
      <AButton type="submit">Add</AButton>
    </form>
  );
};

export default AddTodo;
