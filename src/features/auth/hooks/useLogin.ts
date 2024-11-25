import { useMutation } from "@tanstack/react-query";
import { loginUserAPI } from "@/features/auth/api";
import { getQueryClient } from "@/lib/get-query-client";
import { useRouter} from "next/navigation";

const useLogin = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: loginUserAPI,
        onSuccess: (data) => {
            router.push("/");
            console.log(data)
        },
        onError: (error) => {
            alert("Login failed. Please try again.");
            console.error(error);
        },
    },
        getQueryClient()
        );
};

export default useLogin;
