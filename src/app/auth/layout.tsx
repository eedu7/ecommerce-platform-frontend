import React from 'react'


const Layout= ({children}: {children: React.ReactNode}) => {
    return (
        <main className="w-full grid grid-cols-2 h-screen p-4 bg-gray-200 gap-4 mx-auto max-w-screen-xl">
            <div className="col-span-1">
            {children}
            </div>
            <div className="col-span-1 h-full w-full bg-rose-400 rounded-xl">

            </div>
        </main>
    )
}
export default Layout;
