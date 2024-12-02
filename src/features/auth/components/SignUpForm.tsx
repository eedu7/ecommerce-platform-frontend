"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import InputWithIcon from "@/features/auth/components/ui/InputWithIcon";

const SignUpFormSchema = z.object({
    username: z.string().min(3, {message: "Username must be at least 3 characters"}).max(64, {message: "Username must be at most 64 characters long."}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters."}).max(64, {message: "Password must be at most 64 characters long."}),
    confirmPassword: z.string().min(8, {message: "Password must be at least 8 characters."}).max(64, {message: "Password must be at most 64 characters long."}),
})


const SignUpForm = () => {
    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema), defaultValues: {
            username: "", email: "", password: "", confirmPassword: ""
        }, mode: "onChange"
    },)

    const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
        console.table(values)
    }

    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="username"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <InputWithIcon placeholder="John Doe" label="Username" field={field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <InputWithIcon label="Email" type="email" placeholder="john.doe@example.com" field={field}/>
                    </FormControl>


                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <Input type="password" placeholder="password" {...field} />
                    </FormControl>

                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="confirmPassword"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <Input type="password" placeholder="confirm password" {...field} />
                    </FormControl>

                    <FormMessage/>
                </FormItem>)}
            />
            <div className="flex flex-row-reverse gap-4">
                <Button type="submit" className="w-32 font-semibold tracking-widest">Submit</Button>
            </div>
        </form>
    </Form>)
}
export default SignUpForm


























