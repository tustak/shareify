import { combineReducers } from 'redux';

import items from './itemsReducer';
import users from './usersReducer';

export default combineReducers({
    items,
    users
})