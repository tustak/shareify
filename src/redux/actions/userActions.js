import {
    Redirect,
    BrowserRouter,
    withRouter
} from 'react-router-dom';

import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const FETCH_USER = 'FETCH_USER';
const GET_USER_DATA = 'GET_USER_DATA';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export function fetchUser(userId) {
    const url = `${BASE_URL}/api/users/${userId}`;
    return {
        type: FETCH_USER,
        payload: axios.get(url),
    }
}

export function loginUser(credentials, dispatch) {
    axios.post(
        'http://localhost:4000/api/login',
        {
            headers: {'Content-Type': 'application/json'},
            withCredentials: false,
            data: credentials,
        }

    )
        .then(
            response => {
                window.sessionStorage.setItem('jwt', response.token);
                dispatch(loginSuccess());
            }
        )
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

export function logoutUser() {
    window.sessionStorage.clear();
    return {
        type: LOGOUT_USER,

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