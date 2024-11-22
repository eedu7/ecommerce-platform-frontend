import React from 'react'
import Image from "next/image";
import {RegisterFormImage} from "@/utils/images";

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <main className="max-w-7xl mx-auto w-full my-48">
            <div className="md:grid grid-cols-2 gap-4 my-12">
                <section className="size-full col-span-1 flex justify-center items-center">
                    <div className="w-96 bg-gray-50 border p-4 rounded-xl shadow">
                        {children}
                    </div>
                </section>
                <section className="col-span-1 size-full hidden md:flex">
                    <div className="flex size-full justify-center items-center">
                    <Image src={RegisterFormImage} alt="Logo" width="1256" height="128" />
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Layout
