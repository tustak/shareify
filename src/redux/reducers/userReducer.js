
import initialState from './initialState';

const userReducer =
    (state = initialState.user, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload,

            });
        case 'LOGIN_SUCCESS_FULFILLED':
            return Object.assign({}, state, {
                auth: true
            });
        case 'LOGOUT_USER':
            return Object.assign({}, state, {
                user: null,
                auth: false,
            });
        case 'GET_USER_DATA_FULFILLED':
            return Object.assign({}, state, {
                data: action.payload.data,
                auth: true,
            });
        case 'GET_USER_DATA_REJECTED':
            return Object.assign({}, state, {
                user: null,
                auth: false,
            });

        default:
            return state;
    }
};

export default userReducer;