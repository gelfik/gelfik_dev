import axios, {AxiosStatic} from 'axios';
import TokenStore from "../stores/TokenStore";

const $axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

$axios.defaults.headers.post['Content-Type'] = 'application/json';

$axios.interceptors.request.use(function (config) {
    const token = TokenStore.get()
    if (token) {
        config.headers.Authorization = token;
    }

    return config
});

export default $axios
