import { combineReducers } from 'redux';

import items from './itemsReducer';
import ui from './uiReducer';
//import user from './userReducer';
import session from './sessionReducer';

export default combineReducers({
    items,
    ui,
    session,
})