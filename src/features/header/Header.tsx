import React from 'react'
import Navbar from "@/features/header/navbar/Navbar";
import HeaderCategories from "@/features/header/header-categories/HeaderCategories";

const Header = () => {
    return (<header className="mx-auto max-w-screen-xl pt-4 border-b-2 border-gray-400">
            <Navbar/>
            <HeaderCategories />
        </header>)
}
export default Header
