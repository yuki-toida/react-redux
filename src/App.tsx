import React from "react";
import AddTodo from "./components/AddTodo/Container";
import FetchTodo from "./components/FetchTodo/Container";
import TodoList from "./components/TodoList/Container";
import Dialog from "./components/Dialog/Container";

const App: React.FC = () => {
  return (
    <div>
      <Dialog />
      <FetchTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
