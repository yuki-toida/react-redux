import React from "react";
import AddTodo from "./components/AddTodo/Container";
import FetchTodo from "./components/FetchTodo/Container";
import TodoList from "./components/TodoList/Container";

const App: React.FC = () => {
  return (
    <div>
      <FetchTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
