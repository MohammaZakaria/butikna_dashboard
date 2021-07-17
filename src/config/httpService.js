import axios from 'axios';
import { API_BASE_URL } from './public-variables'
import { getAccessToken } from './../helpers/cookies'

// const access_token = getCookie('access_token')
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        if (getAccessToken() !== undefined && getAccessToken() !== '') {
            config.headers.Authorization = `Bearer ${getAccessToken()}`;
        }
        // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
        config.baseURL = API_BASE_URL;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};


// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }