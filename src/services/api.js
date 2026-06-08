import axios from "axios";
import { API_ENDPOINTS } from "../constants/api";

const API = axios.create({
    baseURL: API_ENDPOINTS.BASE_URL
});



API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default API;