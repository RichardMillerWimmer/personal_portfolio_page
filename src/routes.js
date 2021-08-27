import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Work from "./Components/Work/Work";
import WorkDisplay from "./Components/Work/WorkDisplay";
// import { ErrorBoundary } from "@rollbar/react/lib";

export default (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path='/work/:id' component={WorkDisplay} />
    <Route path="/work" component={Work}/>
  </Switch>
);
