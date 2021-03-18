import axios from 'axios';

export const fetchData = (url, action) => {
    axios.get(url).then((response) => action(response.data));
};

export const fetchFilteredCards = (url, action) => {
    axios.get(url).then((response) => action(response.data.results));
};
