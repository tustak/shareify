
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

const SEARCH_ITEM = 'SEARCH_ITEM';

export function searchItem(query, distance) {
    const url = `${BASE_URL}/api/items/${query}/${distance}`;
    console.log(url);
    return {
        type: SEARCH_ITEM,
        payload: axios.get(url),
    }
}