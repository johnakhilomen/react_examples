import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import Header from "./Header";
import CardList from "./CardList";
import User from "./User";
import NotFound from "./NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route path="/" exact={true}>
          <CardList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;