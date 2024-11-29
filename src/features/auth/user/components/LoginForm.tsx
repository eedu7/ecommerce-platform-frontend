"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
            <div className="flex justify-between py-2">
                <div className="flex justify-end items-center gap-2">
                    <Checkbox id="stay-signed-in" checked />
                    <Label htmlFor="stay-signed-in">Stay signed in</Label>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground underline cursor-pointer">
                        Forgot your password?
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <Button disabled={!form.formState.isValid} type="submit" size="lg"
                        className="w-32 rounded-3xl">Sign in</Button>
            </div>
            <div className="text-center">
                <p className="text-xs underline text-muted-foreground tracking-widest">Trouble signing in?</p>
            </div>
        </form>
    </Form>)
}
export default LoginForm
