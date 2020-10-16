import axios from 'axios';
import TokenStore from "../stores/TokenStore";

const $axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

$axios.defaults.headers.post['Content-Type'] = 'application/json';
$axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

$axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
$axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
$axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'Content-Length,Content-Range';


$axios.interceptors.request.use(function (config) {
    const token = TokenStore.get()
    if (token) {
        config.headers.Authorization = token;
    }

    return config
});

export default $axios
