import React from "react";
import { Switch, Route } from "react-router-dom";

import LMain from "layouts/Main";
import Home from "./pages/Home";
import TodosListContainer from "./pages/Todos/List/Container";
import TodosEditContainer from "./pages/Todos/Edit/Container";
import DialogContainer from "./components/Dialog/Container";

const App: React.FC = () => {
  return (
    <div>
      <DialogContainer />
      <Switch>
        <LMain>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={TodosListContainer} />
          <Route exact path="/todos/:id" component={TodosEditContainer} />
        </LMain>
      </Switch>
    </div>
  );
};

export default App;
