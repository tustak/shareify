import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/Loadable';
import Header from './containers/Header/Loadable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
        <Switch>
            <Route exact patch="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;