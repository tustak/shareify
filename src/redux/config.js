
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/index';

export default function configureStores(initialState, history) {

    const store = createStore(
        reducer,
        applyMiddleware(promise(), thunk, logger, routerMiddleware(history))
    );

    return store;
}