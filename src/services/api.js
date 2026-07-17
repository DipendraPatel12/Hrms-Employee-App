import axios from "axios";
import { API_ENDPOINTS } from "../constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
    baseURL: API_ENDPOINTS.BASE_URL
});

API.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");

        // Tell the backend this is a mobile client (enforces employee-only login)
        config.headers["X-Client"] = "mobile";

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