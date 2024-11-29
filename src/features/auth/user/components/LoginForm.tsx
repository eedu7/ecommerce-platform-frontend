"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const LoginFormSchema = z.object({
    email: z.string().email(), password: z.string().min(8, {message: "Password must be at least 8 characters."})
        .max(64, {message: "Password must be at most 64 characters."})
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number."),
});


const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema), defaultValues: {
            email: "", password: "",
        }, mode: "onChange"
    })

    const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
        console.table(values)
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
                name="password"
                render={({field}) => (<FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />

            <div className="flex justify-center my-2">
                <Button disabled={!form.formState.isValid} type="submit" size="lg"
                        className="w-48 rounded-3xl">Register</Button>
            </div>
        </form>
    </Form>)
}
export default LoginForm
