import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <main className="max-w-7xl mx-auto p-4 h-screen">
            <div className="grid grid-cols-2 gap-4 h-full w-full border-2 border-green-500">
                <section className="border border-amber-300 flex justify-center items-center">
                    <div>
                    {children}
                    </div>
                </section>
                <section className="border hidden md:flex">Second Section</section>

            </div>
        </main>

    )
}
export default Layout
