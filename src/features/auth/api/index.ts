import axios from "axios";
import {
    LoginUserAPIRequestData, LoginUserAPIResponseData, RegisterUserAPIRequestData, RegisterUserAPIResponseData
} from "@/features/auth/api/types";


const authAPI = axios.create({
    baseURL: "http://192.168.18.33:8001/v1/auth/", headers: {
        "Content-Type": "application/json",
    }
});


export const registerUserAPI = async (data: RegisterUserAPIRequestData): Promise<RegisterUserAPIResponseData> => {
    const response = await authAPI.post("/", data);
    return response.data;
}


export const loginUserAPI = async (data: LoginUserAPIRequestData): Promise<LoginUserAPIResponseData> => {
    const response = await authAPI.post("/login", data);
    return response.data;
}