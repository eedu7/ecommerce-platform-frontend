import React from 'react'


const Layout= ({children}: {children: React.ReactNode}) => {
    return (
        <main className="w-full lg:grid grid-cols-2 h-screen gap-4 mx-auto max-w-screen-xl">
            <div className="col-span-1 p-4">
            {children}
            </div>
            <div className="col-span-1 h-full w-full bg-hazel hidden lg:block">

            </div>
        </main>
    )
}
export default Layout;
