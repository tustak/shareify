
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const FETCH_USER = 'FETCH_USER';
const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
const GET_USER_DATA = 'GET_USER_DATA';

export function fetchUser(userId) {
    const url = `${BASE_URL}/api/users/${userId}`;
    return {
        type: FETCH_USER,
        payload: axios.get(url),
    }
}

export function submitLogin(credentials) {
    return {
        type: SUBMIT_LOGIN,
        payload: axios.post(
            'http://localhost:4000/api/login',
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: false,
                data: credentials,
            }

        ),
    }
}

export function getUserData(userId) {
    return {
        type: GET_USER_DATA,
        payload: axios.post(
            'http://localhost:4000/api/userdata',
            userId,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'authentication': window.sessionStorage.jwt
                },
                withCredentials: false,
            }

        ),
    }
}