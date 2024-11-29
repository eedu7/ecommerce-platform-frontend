"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import InputPassword from "@/features/auth/user/components/ui/InputPassword";
import TermsAndServiceParagraph from "@/terms";
import useAuth from "@/hooks/auth";

const RegisterFormSchema = z.object({
    username: z

        .string()
        .min(3, {
            message: "Username must be at least 3 characters.",
        }).max(64, {message: "Password must be at most 64 characters."}), email: z.string().email(), password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters."})
        .max(64, {message: "Password must be at most 64 characters."})
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number."),
});


const RegisterForm = () => {

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema), defaultValues: {
            username: "", email: "", password: "",
        }, mode: "onChange"
    })

    const {register} = useAuth();

    const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
        register.mutate(values);
    }

    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="username"
                render={({field}) => (<FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (<FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <InputPassword field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <TermsAndServiceParagraph/>
            <div className="flex justify-center my-2">
                <Button disabled={!form.formState.isValid} type="submit" size="lg"
                        className="w-48 rounded-3xl">Register</Button>
            </div>
        </form>
    </Form>)
}
export default RegisterForm
