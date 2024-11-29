"use client"
import React from 'react'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Separator} from "@/components/ui/separator";
import SocialMediaLogins from "@/features/auth/user/components/SocialMediaLogins";
import {Button} from "@/components/ui/button";
import LoginForm from "@/features/auth/user/components/LoginForm";
import TermsAndServiceParagraph, {AdditionalInfo} from "@/terms";

interface RegisterFormDialogProps {
    isFormOpen: boolean;
    setIsFormOpen: (isOpen: boolean) => void;
    openRegisterForm: () => void;
}

const LoginFormDialog = ({isFormOpen, setIsFormOpen, openRegisterForm}: RegisterFormDialogProps) => {
    return (<Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="w-96">
                <DialogHeader className="">
                    <div className="w-full flex justify-between items-center">
                        <DialogTitle className="flex flex-col gap-2">
                            Sign in
                        </DialogTitle>
                        <div className="mx-4">
                            <Button onClick={openRegisterForm} variant="secondary" className="p-4 hover:font-semibold rounded-2xl hover:scale-110 animate-in">Register</Button>
                        </div>
                    </div>
                </DialogHeader>
                <LoginForm/>
                <Separator/>
                <DialogFooter>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-center">
                            <SocialMediaLogins/>
                        </div>
                        <div className="">
                            <TermsAndServiceParagraph/>
                        </div>
                        <AdditionalInfo />
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>

    )
}
export default LoginFormDialog
