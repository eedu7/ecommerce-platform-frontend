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
import { User, Mail } from "lucide-react";

import {RegisterFormSchema, RegisterSchema} from "@/features/auth/schema";
import {z} from "zod";
import InputIcon from "@/features/auth/components/ui/InputIcon";
import InputPassword from "@/features/auth/components/ui/InputPassword";

const RegisterForm = () => {
    const form = RegisterFormSchema();

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        console.table(values);
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField control={form.control} render={
                    ({field}) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <InputIcon inputType="text" placeholder="John Doe 123" Icon={User} field={field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>)
                } name="username"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <InputIcon inputType="email" placeholder="john.doe@example.com" Icon={Mail} field={field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="email"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <InputPassword field={field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="password"  />
                <FormField control={form.control} render={
                    ({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <InputPassword field={field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)
                } name="confirmPassword"  />
                <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">Login</Button>
                <Button type="submit" >Register</Button>
                </div>
            </form>
        </Form>
    )
}
export default RegisterForm;
