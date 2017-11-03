import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const TOGGLE_MODAL = 'TOGGLE_MODAL';
const LOAD_PERSONAL_SETTINGS = 'LOAD_PERSONAL_SETTINGS';
const SET_DATE_BIRTH = 'SET_DATE_BIRTH';
const SET_FORM_PROPERTY = 'SET_FORM_PROPERTY';
const SET_SAVED_MESSAGE = 'SET_SAVED_MESSAGE';
const TOGGLE_BACKDROP = 'TOGGLE_BACKDROP';

export function toggleModal(modal) {
    return {
        type: TOGGLE_MODAL,
        modal: modal,
    }
}

export function loadPersonalSettings() {
    const url = `${BASE_URL}/api/authenticate`;
    return {
        type: LOAD_PERSONAL_SETTINGS,
        payload: axios.post(
            url,
            null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': window.sessionStorage.jwt,
                }
            }
        )
    };
}

export function setDateBirth(date) {
    return {
        type: SET_DATE_BIRTH,
        payload: date
    }
}

export function setFormProperty(form, property, value) {
    return {
        type: SET_FORM_PROPERTY,
        payload: {
            form: form,
            property: property,
            value: value
        }
    }
}

export function savePersonalSettings(data) {
    const url = `${BASE_URL}/api/save`;
    return axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'authentication': window.sessionStorage.jwt,
            }
        }
    )
}

export function saveNewOffer(data) {
    const url = `${BASE_URL}/api/offer/new`;
    return axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'authentication': window.sessionStorage.jwt,
        }
    })
}

export function setSavedMessage(form, saveMessage) {
    return {
        type: SET_SAVED_MESSAGE,
        payload: {
            form: form,
            saveMessage: saveMessage,
        },
    }
}

export function toggleBackdrop() {
    return {
        type: TOGGLE_BACKDROP
    }
}