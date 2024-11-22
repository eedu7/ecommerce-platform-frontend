import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <main className="max-w-7xl mx-auto w-full">
            <div>
                <section className="w-96">{children}</section>
                <section>Hello World</section>
            </div>
        </main>
    )
}
export default Layout
