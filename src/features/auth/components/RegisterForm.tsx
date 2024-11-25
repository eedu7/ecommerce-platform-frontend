"use client"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Loader, Mail, User} from "lucide-react";

import {RegisterFormSchema, RegisterSchema} from "@/features/auth/schema";
import {z} from "zod";
import InputIcon from "@/features/auth/components/ui/InputIcon";
import InputPassword from "@/features/auth/components/ui/InputPassword";
import React from "react";
import useRegisterUser from "@/features/auth/hooks/useRegistration";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const form = RegisterFormSchema();
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const {mutate, isPending} = useRegisterUser();
    const router = useRouter();

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        const {email, username, password} = values;
        const data = {
            email, username, password,
        }
        mutate(data);

    }

    return (<Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField control={form.control} render={({field}) => (<FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <InputIcon inputType="text" placeholder="John Doe 123" Icon={User} field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name="username"/>
                <FormField control={form.control} render={({field}) => (<FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <InputIcon inputType="email" placeholder="john.doe@example.com" Icon={Mail} field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name="email"/>
                <FormField control={form.control} render={({field}) => (<FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <InputPassword isVisible={isVisible} setIsVisible={setIsVisible} field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name="password"/>
                <FormField control={form.control} render={({field}) => (<FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                        <InputPassword showButton={false} isVisible={isVisible} setIsVisible={setIsVisible}
                                       field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)} name="confirmPassword"/>
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <Button type="button" variant="link" onClick={() => router.push("/auth/login")}>
                            Already a user? <span className="text-sky-400">Sign in</span>
                        </Button>
                    </div>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? <div className="flex justify-center items-center space-x-2">
                            <p>Registering</p>
                            <Loader className="animate-spin"/>
                        </div> : <p>Register</p>}

                    </Button>

                </div>
            </form>
        </Form>)
}
export default RegisterForm;
