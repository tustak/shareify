import { combineReducers } from 'redux';

import items from './itemsReducer';
import user from './usersReducer';

export default combineReducers({
    items,
    user
})