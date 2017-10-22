import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/Loadable';
import Header from './containers/Header/Loadable';
import Modal from './containers/Modal/Loadable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <Modal/>
        <Switch>
            <Route exact patch="/" component={HomePage} />
            <Route exact patch="/modal" component={Modal} />
        </Switch>
      </div>
    );
  }
}

export default App;