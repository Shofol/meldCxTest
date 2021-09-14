import axios from 'axios';

export const authAxios = axios.create({})

authAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})