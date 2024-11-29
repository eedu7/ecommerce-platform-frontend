"use client";
import React from 'react'
import RegisterFormDialog from "@/features/auth/user/components/RegisterFormDialog";
import {Button} from "@/components/ui/button";
import LoginFormDialog from "@/features/auth/user/components/LoginFormDialog";

const OpenFormRegisterLogin = () => {
    const [isRegisterFormOpen, setIsRegisterFormOpen] = React.useState<boolean>(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = React.useState<boolean>(false);

    const openRegisterForm = () => {
        setIsRegisterFormOpen(true);
        setIsLoginFormOpen(!isLoginFormOpen);
    }

    return (
        <>
            <Button variant="ghost" onClick={() => setIsLoginFormOpen(!isLoginFormOpen)}>
                Sign In
            </Button>
            <RegisterFormDialog isFormOpen={isRegisterFormOpen} setIsFormOpen={setIsRegisterFormOpen}  />
            <LoginFormDialog isFormOpen={isLoginFormOpen} setIsFormOpen={setIsLoginFormOpen} openRegisterForm={openRegisterForm}  />
        </>
    )
}
export default OpenFormRegisterLogin
