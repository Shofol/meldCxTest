import axios from 'axios';

export const authAxios = axios.create({
    baseURL: process.env.PUBLIC_URL,
})

authAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem('token')}`;
    return config;
})