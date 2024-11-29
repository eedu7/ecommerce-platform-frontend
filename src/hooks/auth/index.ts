import {useMutation, UseMutationResult} from "@tanstack/react-query";
import {userLoginAPI, userRegisterAPI} from "@/api/auth";
import {
    LoginUserAPIRequestData, LoginUserAPIResponseData, RegisterUserAPIRequestData, RegisterUserAPIResponseData
} from "@/api/auth/types";
import {getQueryClient} from "@/lib/providers/TanstackReactProvider";

const useAuth = (): {
    register: UseMutationResult<RegisterUserAPIResponseData, Error, RegisterUserAPIRequestData>,
    login: UseMutationResult<LoginUserAPIResponseData, Error, LoginUserAPIRequestData>
} => {
    const register = useMutation({
        mutationFn: userRegisterAPI, onSuccess: (data) => {
            console.log("User registered successfully!");
            console.table(data);
        }, onError: error => {
            console.error("Registration failed");
            console.table(error);
        },
    }, getQueryClient())

    const login = useMutation({
        mutationFn: userLoginAPI, onSuccess: (data) => {
            console.log("User login successfully!");
            console.table(data);
        }, onError: error => {
            console.error("User login failed");
            console.table(error);
        }
    }, getQueryClient())

    return {register, login};

}

export default useAuth;