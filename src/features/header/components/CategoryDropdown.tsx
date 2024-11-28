import React from 'react'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {categories} from "../../../../constants/categories";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {AlignJustify} from "lucide-react";

const CategoryDropdown = () => {
    return (<DropdownMenu>
        <DropdownMenuTrigger className="active:border-none focus:border-none">
            <div className="flex gap-1 justify-center items-center">
                <AlignJustify/>
                <span className="text-sm">Categories</span>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <ScrollArea>
                <div className="flex flex-col gap-4 h-96">
                    {categories.map(({id, name}) => (<DropdownMenuItem className="font-light hover:underline"
                                                                       key={id}>{name}</DropdownMenuItem>))}
                </div>
                <ScrollBar orientation="vertical"/>
            </ScrollArea>
        </DropdownMenuContent>

    </DropdownMenu>)
}
export default CategoryDropdown
