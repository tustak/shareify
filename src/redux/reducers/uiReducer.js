
const { fromJS } = require('immutable')

const uiReducer = (state = {
    modals: {
        register: {
            display: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        login: {
            display: false,
            username: '',
            password: '',
            message: '',
        }
    }
}, action) => {
    switch(action.type) {
        case 'TOGGLE_MODAL':
            const allModals = fromJS(state).getIn(['modals']).toJS();
            const allModalKeys = Object.keys(allModals);
            let modals = fromJS(allModals);
            allModalKeys.map(key => (key === action.modal)?
                modals = modals.updateIn([key, 'display'], value => !value)
                :
                modals = modals.updateIn([key, 'display'], value => false)
            );
            modals = modals.toJS();
            return {
                modals
            };
        default:
            return state;
    }
};

export default uiReducer;