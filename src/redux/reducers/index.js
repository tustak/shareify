import { combineReducers } from 'redux';

import items from './itemsReducer';
import user from './usersReducer';
import ui from './uiReducer';

export default combineReducers({
    items,
    user,
    ui,
})