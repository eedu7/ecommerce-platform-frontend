"use client"
import React from 'react'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import RegisterForm from "@/features/auth/user/components/RegisterForm";
import {Separator} from "@/components/ui/separator";
import SocialMediaLogins from "@/features/auth/user/components/SocialMediaLogins";

const RegisterFormDialog = () => {
    return (<Dialog>
            <DialogTrigger
                className="h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground">
                Sign In
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex flex-col gap-2">
                        <p>Create you account</p>
                        <p className="text-sm font-normal text-foreground">Registration is easy.</p>
                    </DialogTitle>
                </DialogHeader>
                <RegisterForm/>
                <Separator/>
                <DialogFooter>
                    <div className="w-full">
                        <SocialMediaLogins/>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>

    )
}
export default RegisterFormDialog
