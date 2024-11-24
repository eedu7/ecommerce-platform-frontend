import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";


export const RegisterSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must match the password"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the error path for confirmPassword
});

export const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must match the password"),
})



export const RegisterFormSchema = () => {
    return useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema), defaultValues: {
            username: "", email: "", password: "", confirmPassword: ""
        }
    })
}


export const LoginFormSchema = () => {
    return useForm<z.infer <typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema), defaultValues: {
            email: "",
            password: "",
        }
    })
}
