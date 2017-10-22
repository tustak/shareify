const userReducer = (state = {
    name: "",
    age: 0,
    }, action) => {
    switch(action.type) {
        case 'FETCH_USER':
            return Object.assign({}, state, {
                name: "Andres",
                age: 30
            });
        default:
            return null;
    }
};

export default userReducer;