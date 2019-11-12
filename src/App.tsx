import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import TodoListContainer from "./pages/Todos/List/Container";
import DialogContainer from "./components/Dialog/Container";

const App: React.FC = () => {
  return (
    <div>
      <DialogContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/todos" component={TodoListContainer} />
      </Switch>
    </div>
  );
};

export default App;
