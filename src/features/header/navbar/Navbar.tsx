"use client";

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {Input} from "@/components/ui/input";
import {GiftIcon, HeartIcon, ShoppingCartIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

const categories: {title: string, href: string; description: string;}[] = [
    {
        title: "Accessories",
        href: "/",
        description: "Fashionable and functional accessories for all occasions."
    },
    {
        title: "Cars",
        href: "/",
        description: "Explore a variety of vehicles, from classic to modern."
    },
    {
        title: "Movies",
        href: "/",
        description: "Discover the latest blockbusters and timeless classics."
    },
    {
        title: "Games",
        href: "/",
        description: "Dive into a world of interactive entertainment and fun."
    },
    {
        title: "Console",
        href: "/",
        description: "Top gaming consoles and accessories for the best experience."
    },
    {
        title: "Sports",
        href: "/",
        description: "Gear and equipment for your favorite sports and activities."
    },
    {
        title: "Electronics",
        href: "/",
        description: "Latest gadgets and electronics to simplify your life."
    },
    {
        title: "Furniture",
        href: "/",
        description: "Stylish and functional furniture for every room in your home."
    },
    {
        title: "Books",
        href: "/",
        description: "A curated selection of novels, textbooks, and more."
    },
    {
        title: "Clothing",
        href: "/",
        description: "Trendy and comfortable clothing for all seasons."
    },
    {
        title: "Toys",
        href: "/",
        description: "Fun and educational toys for kids of all ages."
    },
    {
        title: "Beauty",
        href: "/",
        description: "Enhance your beauty routine with top-rated products."
    },
    {
        title: "Fitness",
        href: "/",
        description: "Gear and apparel for fitness enthusiasts."
    },
    {
        title: "Home Decor",
        href: "/",
        description: "Decorative items to elevate your living space."
    },
    {
        title: "Pet Supplies",
        href: "/",
        description: "Everything you need for your furry friends."
    },
    {
        title: "Jewelry",
        href: "/",
        description: "Elegant and stylish jewelry for every occasion."
    },
    {
        title: "Outdoor",
        href: "/",
        description: "Gear and equipment for outdoor adventures."
    }
];



const Navbar = () => {
    return (<div className="w-full flex justify-center items-center">
            <NavigationMenu className="">
                <NavigationMenuList className="w-full flex gap-2 items-center">
                    <NavigationMenuItem>
                        <h2 className="text-5xl font-sans font-medium text-orange-500">Etsy</h2>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {categories.map(category => (
                                    <ListItem
                                        key={category.title}
                                        title={category.title}
                                        href={category.href}
                                    >
                                        {category.description}

                                    </ListItem>
                                ))}

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Input className="w-96 border-2 border-black md:text-lg rounded-3xl"
                               placeholder="Search for anything"/>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="ghost">Sign in</Button>
                    </NavigationMenuItem>
                    <div className="flex justify-between items-center">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <HeartIcon/>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <GiftIcon/>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <ShoppingCartIcon/>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>

                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}
export default Navbar;


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"