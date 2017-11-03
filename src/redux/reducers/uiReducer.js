
import initialState from './initialState';
const { fromJS } = require('immutable');

const uiReducer =
    (state = initialState.ui, action) => {
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
                ...state,
                modals
            };
        case 'LOAD_PERSONAL_SETTINGS_FULFILLED':
            return Object.assign({}, state, {
                ...state,
                forms: {
                    ...state.forms,
                    personal: action.payload.data
                }
            });
        case 'SET_DATE_BIRTH':
            return Object.assign({}, state, {
                forms: {
                    ...state.forms,
                    personal: {
                        ...state.forms.personal,
                        dateOfBirth: action.payload
                    }
                }
            });
        case 'SET_FORM_PROPERTY':
            return {
                ...state,
                forms: {
                    ...state.forms,
                    saveMessage: 'Save changes',
                    saveDisabled: false,
                    [action.payload.form]: {
                        ...state.forms[action.payload.form],
                        [action.payload.property]: action.payload.value
                    }
                }
            };
        case 'SET_SAVED_MESSAGE':
            return {
                ...state,
                forms: {
                    ...state.forms,
                    saveMessage: 'Saved',
                    saveDisabled: true
                }
            };
        case 'TOGGLE_BACKDROP':
            return {
                ...state,
                backdrop: !state.backdrop
            };
        default:
            return state;
    }
};

export default uiReducer;