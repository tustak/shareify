
import { createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';

import reducer from './reducers/index';

export default function configureStores(initialState = {}, history) {
    const middleware = [
        routerMiddleware(history),
    ];

    const store = createStore(
        reducer
    )

    return store;
}