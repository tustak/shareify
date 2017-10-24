
const userReducer = (state = {
    user: null,
    }, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload,

            });
        default:
            return state;
    }
};

export default userReducer;