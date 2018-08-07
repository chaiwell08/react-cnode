import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import List from "./component/List";
import Detail from './component/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect from="/" to="/list" />
        </Switch>
      </Router>
    );
  }
}

export default App;
