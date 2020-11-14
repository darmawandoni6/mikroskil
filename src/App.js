import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portal from "./container/portal/Portal";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Portal />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
