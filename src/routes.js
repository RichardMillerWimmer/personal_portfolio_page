import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Work from "./Components/Work/Work";

export default (
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path="/work" component={Work}/>
  </Switch>
);
