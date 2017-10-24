
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

const FETCH_USER = 'FETCH_USER';

export function fetchUser(userId) {
    const url = `${BASE_URL}/api/users/${userId}`;
    console.log(url);
    return {
        type: FETCH_USER,
        payload: axios.get(url),
    }
}