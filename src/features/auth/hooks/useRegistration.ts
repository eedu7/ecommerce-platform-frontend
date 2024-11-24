
import {useMutation} from "@tanstack/react-query";
import {registerUserAPI} from "@/features/auth/api";
import {getQueryClient} from "@/lib/get-query-client";


const useRegisterUser = () => {
    return useMutation(
        {
            mutationFn: registerUserAPI,
            onSuccess: data => {
                alert("Successfully registered");
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

export default useRegisterUser;