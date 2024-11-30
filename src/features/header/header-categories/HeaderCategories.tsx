import React from 'react'
import {Button} from "@/components/ui/button";

const HeaderCategories = () => {
    return (<div className="w-full my-2">
            <ul className="w-full flex gap-4 justify-center items-center">
                <li>
                    <Button variant="ghost" className="font-semibold">Gifts</Button>
                </li>
                <li><Button variant="ghost" className="font-semibold">Cyber Deals</Button></li>
                <li><Button variant="ghost" className="font-semibold">Home Favourite</Button></li>
                <li><Button variant="ghost" className="font-semibold">Fashion Finds</Button></li>
                <li><Button variant="ghost" className="font-semibold">Registry</Button></li>
            </ul>
        </div>)
}
export default HeaderCategories

