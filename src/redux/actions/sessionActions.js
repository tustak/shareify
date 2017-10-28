import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(credentials) {
    const url = `${BASE_URL}/api/login`;
    return axios.post(
        url,
        credentials,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
}

export function authenticateUser() {
    const url = `${BASE_URL}/api/authenticate`;
    return {
        type: AUTHENTICATE,
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
    }
}

export function logoutUser() {
    window.sessionStorage.clear();
    return {
        type: LOGOUT_USER
    }
}