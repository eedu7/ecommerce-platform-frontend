"use client"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Loader, Mail} from "lucide-react";

import {LoginFormSchema, LoginSchema} from "@/features/auth/schema";
import {z} from "zod";
import InputIcon from "@/features/auth/components/ui/InputIcon";
import InputPassword from "@/features/auth/components/ui/InputPassword";
import React from "react";
import useLogin from "@/features/auth/hooks/useLogin";
import {useRouter} from "next/navigation";


const LoginForm = () => {
    const form = LoginFormSchema();
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const {mutate, isPending} = useLogin();
    const router = useRouter();

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        mutate(values);

    }

    return (<Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">

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

            <div className="flex flex-col">
                <div className="flex justify-end">
                    <Button size="sm" type="button" variant="link" onClick={() => router.push("/auth/register")}>
                        New user? <span className="text-sky-400">Create account</span>
                    </Button>
                </div>
                <Button type="submit" disabled={isPending}>
                    Login
                    {
                        isPending &&
                        <Loader className="animate-spin"/>
                    }
                </Button>
            </div>
        </form>
    </Form>)
}
export default LoginForm;
