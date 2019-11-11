import React from "react";
import AddTodo from "./components/AddTodo/Container";
import InitTodo from "./components/InitTodo/Container";
import TodoList from "./components/TodoList/Container";

const App: React.FC = () => {
  return (
    <div>
      <InitTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
