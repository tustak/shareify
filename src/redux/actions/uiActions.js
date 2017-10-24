
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

const TOGGLE_REGISTER_MODAL = 'TOGGLE_REGISTER_MODAL';

export function toggleRegisterModal() {
    return {
        type: TOGGLE_REGISTER_MODAL,
    }
}