import React, { useState } from "react";

type Props = {
  // mapDispatchToProps
  onSubmit: (text: string) => void;
};

const AddTodo: React.FC<Props> = props => {
  // React Hooks を使用し関数内でinput.valueをState管理する
  const [inputText, setInputText] = useState("");
  // OnSubmitイベント
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = inputText.trim();
    if (text === "") {
      return;
    }
    props.onSubmit(text);
    setInputText("");
  };
  // OnChangeイベント
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputText(e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={inputText} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
