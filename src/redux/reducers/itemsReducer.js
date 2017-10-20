
const itemsReducer = (state = {
    items: {},
    name: 'Andres',
    age: 30
    }, action) => {
    switch (action.type) {
        case 'SEARCH_ITEM':
            return Object.assign({}, state, {
                items: action.payload,
            });
        default:
            return state;
    }
};

export default itemsReducer;