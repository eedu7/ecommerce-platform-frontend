import React from 'react'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

import SignUpForm from "@/features/auth/components/SignUpForm";
import {Separator} from "@/components/ui/separator";

const SignUpPage = () => {
    return (<div
        className="w-full lg:h-full h-screen flex justify-center items-center">
        <div className="p-4">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Register here</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">Use email, username and password or continue with google, facebook,
                        X(twitter)</CardDescription>
                </CardHeader>
                <CardContent>
                    <SignUpForm/>
                </CardContent>
                <div className="w-full px-4 pb-2">
                <Separator />
                </div>
                <CardFooter>
                    <div className="flex justify-center items-center w-full gap-4">
                        <div className="size-7 border border-gray-400 rounded shadow hover:scale-125 hover:bg-gray-200 text-center transition-all">G</div>
                        <div className="size-7 border border-gray-400 rounded shadow hover:scale-125 hover:bg-gray-200 text-center transition-all">fb</div>
                        <div className="size-7 border border-gray-400 rounded shadow hover:scale-125 hover:bg-gray-200 text-center transition-all">X</div>
                    </div>
                </CardFooter>
            </Card>

        </div>
    </div>)
}
export default SignUpPage;
