import React from 'react'
import SignUpForm from "@/features/auth/components/SignUpForm";
import Image from "next/image";
import LogoIpsumLogo from "@/utils/images";

const Page = () => {
    return (
        <section className="space-y-2.5">
            <div className="flex justify-center">
            <Image src={LogoIpsumLogo} alt="Logo" height="128" width="128" />
            </div>
            <div>
                <h1 className="bold text-2xl">Register User</h1>
            </div>
            <SignUpForm />
        </section>
    )
}
export default Page;
