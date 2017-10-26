import initialState from './initialState';

const itemsReducer =
    (state = initialState.items, action) => {
    switch (action.type) {
        case 'SEARCH_ITEM_FULFILLED':
            return Object.assign({}, state, {
                list: action.payload,
            });
        default:
            return state;
    }
};

export default itemsReducer;