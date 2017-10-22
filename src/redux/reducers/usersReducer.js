
const userReducer = (state = {
    user: "asd",
    name: "Andres",
    age: 0,
    login: {
        showLoginModal: false,
        loginModalUser: '',
        loginModalPassword: '',
    }
    }, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                name: "Andres",
                age: 30
            });
        default:
            return state;
    }
};

export default userReducer;