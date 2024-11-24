"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import {RegisterFormSchema, RegisterSchema} from "@/features/auth/schema";
import {z} from "zod";

const RegisterForm = () => {
    const form = RegisterFormSchema();

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.table(values);
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} render={
                    ({field}) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>)
                } name="username"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="john.doe@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="email"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="password"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm Password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="confirmPassword"  />
                <Button type="submit">Register</Button>
            </form>
        </Form>
    )
}
export default RegisterForm;
