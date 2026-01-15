import axios from "axios";
import { getToken } from "../utils/storage";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach token
api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Global error handling
api.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            // logout user globally later
        }
        return Promise.reject(error);
    }
);
