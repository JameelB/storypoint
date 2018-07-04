import React, { Component } from 'react';
// import 'patternfly/dist/css/patternfly.css';
import './App.scss';
import NavBar from './NavBar';
import { Home } from './Home';
import { Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="navbar navbar-default" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
