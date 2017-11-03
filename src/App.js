import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './graphql.config';

import HomePage from './containers/HomePage/Loadable';
import Settings from './containers/Settings/Loadable';
import Header from './containers/Header/Loadable';

import './App.css';

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div>
              <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/user/settings" component={Settings} />
            </Switch>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;