import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


export const RegisterSchema = z.object({
    username: z.string().min(3).max(64),
    email: z.string().min(3).max(255),
    password: z.string().min(6).max(64),
    confirmPassword: z.string().min(6).max(64),
});


export const RegisterFormSchema = () => {
    return useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema), defaultValues: {
            username: "", email: "", password: "", confirmPassword: ""
        }
    })
}


