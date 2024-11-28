import React from 'react'
import Header from "@/features/header/Header";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (<>
        <Header/>
        <main>{children}</main>
    </>)
}
export default Layout
