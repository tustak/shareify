
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

const SEARCH_ITEM = 'SEARCH_ITEM';

function getItemData(query, distance) {
    const url = `${BASE_URL}/api/items/${query}/${distance}`;
    return axios.get(url).then((response) => response.data);
}

export function searchItem(item) {
    return {
        type: SEARCH_ITEM,
        payload: getItemData(item, 3),
    }
}