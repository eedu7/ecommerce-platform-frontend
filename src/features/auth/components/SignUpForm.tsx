"use client";

import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    new_password: z.string().min(2).max(50),
})


const SignUpForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.table(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="John.Doe" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                } name="username" />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                } name="password" />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )
                } name="new_password" />

                <Button type="submit">Register</Button>
            </form>
        </Form>
    )
}
export default SignUpForm;
