import axios from 'axios';

//https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD

const BASE_URL = 'https://api.foursquare.com/v2/venues';
const VERSION = '20190102';

axios.defaults.baseURL = BASE_URL;

export const getVenues = ({ latitude, longitude }) => {
    const params = {
        ll: `${latitude},${longitude}`,
        client_id: process.env.VUE_APP_FS_API_CLIENT_ID,
        client_secret: process.env.VUE_APP_FS_API_CLIENT_SECRET,
        v: VERSION,
    };

    return axios.get('/explore', { params });
};