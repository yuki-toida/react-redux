import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import TodoListContainer from "./pages/Todos/List/Container";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/todos" component={TodoListContainer} />
    </Switch>
  );
};

export default App;
