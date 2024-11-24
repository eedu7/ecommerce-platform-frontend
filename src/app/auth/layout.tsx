import React from 'react'
import Image from "next/image";


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <main className="max-w-7xl mx-auto p-4 h-screen">
            <div className="lg:grid lg:grid-cols-2 h-full flex justify-center items-center">
                <section className="flex justify-center items-center">
                    <div>
                    {children}
                    </div>
                </section>
                <section className="hidden lg:flex w-full h-full justify-center items-center">
                    <Image src="/assets/images/shopping-bags.svg" alt="Shopping Bag" width={480} height={480} />
                </section>

            </div>
        </main>

    )
}
export default Layout
