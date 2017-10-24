
const userReducer = (state = {
    user: null,
    }, action) => {
    switch(action.type) {
        case 'FETCH_USER_FULFILLED':
            return Object.assign({}, state, {
                user: {
                    username: "andresmechali",
                    firstName: "Andres",
                    lastName: "Mechali",
                    email: "andresmechali@gmail.com",
                    age: 30,
                    description: "The first user!",
                    points: 48,
                }
            });
        default:
            return state;
    }
};

export default userReducer;