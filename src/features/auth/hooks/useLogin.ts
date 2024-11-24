
import {useMutation} from "@tanstack/react-query";
import {loginUserAPI} from "@/features/auth/api";
import {getQueryClient} from "@/lib/get-query-client";


const useLogin = () => {
    return useMutation(
        {
            mutationFn: loginUserAPI,
            onSuccess: data => {
                console.log("Success!", data)
            },
            onError: error => {
                alert("Error")
                console.error(error)
            }
        },
        getQueryClient()
    )
}

export default useLogin;