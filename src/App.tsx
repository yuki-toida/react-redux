import * as React from "react";
import AddTodo from "./components/AddTodo/Container";
import TodoList from "./components/TodoList/Container";

const component: React.FC = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default component;
