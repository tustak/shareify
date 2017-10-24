

const uiReducer = (state = {
    modals: {
        register: {
            display: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
}, action) => {
    switch(action.type) {
        case 'TOGGLE_REGISTER_MODAL':
            return Object.assign({}, state, {
                modals: {
                    register: {
                        display: !state.modals.register.display,
                    }
                }
            });
        default:
            return state;
    }
};

export default uiReducer;