import axios from "axios";
import {
    LoginUserAPIRequestData,
    LoginUserAPIResponseData,
    RegisterUserAPIRequestData,
    RegisterUserAPIResponseData,
} from "@/features/auth/api/types";

const authAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_API_BASE_URL || "http://localhost:8001/v1/auth/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 10-second timeout
});

// Interceptor for adding tokens to requests
authAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Registration API
export const registerUserAPI = async (
    data: RegisterUserAPIRequestData
): Promise<RegisterUserAPIResponseData> => {
    try {
        const response = await authAPI.post("/", data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
};

// Login API
export const loginUserAPI = async (
    data: LoginUserAPIRequestData
): Promise<LoginUserAPIResponseData> => {
    try {
        const response = await authAPI.post("/login", data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};
