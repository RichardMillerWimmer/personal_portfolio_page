import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Work from "./Components/Work/Work";
import WorkDisplay from "./Components/Work/WorkDisplay";
import { ErrorBoundary } from "@rollbar/react/lib";

export default (
  <Switch>
    <Route exact path="/">
      <Landing />
    </Route>
    <Route path="/work">
      <Work />
    </Route>
    <Route path='/project/:id' component={WorkDisplay} />
  </Switch>
);
