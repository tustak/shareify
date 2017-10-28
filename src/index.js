import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './redux/config';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
const initialState = {}; // check how to use it
const history = createHistory();
const store = configureStore(initialState, history);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
