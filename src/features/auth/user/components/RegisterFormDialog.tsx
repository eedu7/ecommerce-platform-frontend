"use client"
import React from 'react'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import RegisterForm from "@/features/auth/user/components/RegisterForm";
import {Separator} from "@/components/ui/separator";
import SocialMediaLogins from "@/features/auth/user/components/SocialMediaLogins";
import {AdditionalInfo} from "@/terms";

interface RegisterFormDialogProps {
    isFormOpen: boolean;
    setIsFormOpen: (isOpen: boolean) => void;
}

const RegisterFormDialog = ({isFormOpen, setIsFormOpen}: RegisterFormDialogProps) => {
    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="w-96">
                <DialogHeader>
                    <DialogTitle className="flex flex-col gap-2">
                        <p>Create you account</p>
                        <p className="md:text-sm  text-xs font-normal text-foreground">Registration is easy.</p>
                    </DialogTitle>
                </DialogHeader>
                <RegisterForm/>
                <Separator/>
                <DialogFooter>
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-center">
                            <SocialMediaLogins/>
                        </div>
                        <AdditionalInfo/>
                    </div>
                </DialogFooter>

            </DialogContent>
        </Dialog>

    )
}
export default RegisterFormDialog
