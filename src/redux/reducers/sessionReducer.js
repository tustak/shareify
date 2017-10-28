
import initialState from './initialState';

const sessionReducer =
    (state = initialState.session, action) => {
    switch (action.type) {
        case 'AUTHENTICATE_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload.data,
                auth: true,
            });
        case 'LOGOUT_USER':
            return Object.assign({}, state, {
                user: null,
                auth: false,
            });
        default:
            return state;
    }
};

export default sessionReducer;