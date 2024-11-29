import React from 'react'
import {Button} from "@/components/ui/button";
import SearchInput from "@/features/header/components/SearchInput";
import {GiftIcon, HeartIcon, ShoppingBasketIcon} from "lucide-react";
import CategoryDropdown from "@/features/header/components/CategoryDropdown";
import LogoIcon from "@/features/header/components/LogoIcon";
import OpenFormRegisterLogin from "@/features/auth/user/components/OpenFormRegisterLogin";

const Navbar = () => {

    return (<nav className="my-4">
        <div className="flex justify-around">
            <div className="flex">
                <LogoIcon/>
            </div>
            <div className="flex gap-6 w-8/12">
                <CategoryDropdown/>
                <div className="flex-grow">
                    <SearchInput/>
                </div>
                <OpenFormRegisterLogin/>
            </div>
            <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="rounded-3xl hover:bg-sky-100">
                    <HeartIcon/>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-3xl hover:bg-sky-100">
                    <GiftIcon/>
                </Button>
                <Button size="icon" variant="ghost" className="rounded-3xl hover:bg-sky-100">
                    <ShoppingBasketIcon/>
                </Button>
            </div>

        </div>
    </nav>)
}
export default Navbar
