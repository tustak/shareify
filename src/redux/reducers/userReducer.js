
import initialState from './initialState';

const userReducer =
    (state = initialState.user, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload,

            });
        case 'SUBMIT_LOGIN_FULFILLED':
            window.sessionStorage.setItem('jwt', action.payload.data.token);
            return Object.assign({}, state, {
                user: action.payload,
                auth: true,
            });
        case 'SUBMIT_LOGIN_REJECTED':
            console.log('login rejected');
            console.log(action.payload);
            return state;
        case 'GET_USER_DATA_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload,
                auth: true,
            });

        default:
            return state;
    }
};

export default userReducer;