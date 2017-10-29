import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/Loadable';
import Settings from './containers/Settings/Loadable';
import Header from './containers/Header/Loadable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default App;