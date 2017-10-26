
import initialState from './initialState';

const userReducer =
    (state = initialState.user, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload,

            });
        case 'LOGIN_SUCCESS':
            return state;
        case 'LOGOUT_USER':
            return Object.assign({}, state, {
                user: null,
                auth: false,
            });
        case 'GET_USER_DATA_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {
                user: action.payload,
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