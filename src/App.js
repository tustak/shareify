import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/Loadable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact patch="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;