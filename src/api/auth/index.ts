/* eslint-disable */
// @ts-nocheck

import axios from "axios";
import {
    LoginUserAPIRequestData, LoginUserAPIResponseData, RegisterUserAPIRequestData, RegisterUserAPIResponseData
} from "@/api/auth/types";


const authAPI = axios.create({
    baseURL: "http://192.168.18.33:8001/v1/auth", headers: {
        "Content-Type": "application/json",
    }
});


export const userRegisterAPI = async (data: RegisterUserAPIRequestData): Promise<RegisterUserAPIResponseData> => {
    try {
        const response = await authAPI.post("/", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
    }
}


export const userLoginAPI = async (data: LoginUserAPIRequestData): Promise<LoginUserAPIResponseData> => {
    try {
        const response = await authAPI.post("/login", data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
}