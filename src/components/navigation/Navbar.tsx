"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/data/navItems"
import { useState } from "react";
import { categories } from "@/data/categories";



export default function Navbar() {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null)

    const categoryParents = categories.filter(category => !category.parentId)

    const categoryChildren = categories.filter(category => category.parentId === activeCategoryId)


    return (
        <NavigationMenu
        >
            <NavigationMenuList>
                {
                    navItems.map((item) => {
                        const isCategoryMenu = item.label === "دسته‌بندی کالاها"

                        if (isCategoryMenu) {
                            return (
                                <NavigationMenuItem key={item.label}>
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {
                                            categoryParents.map((category) => (
                                                <NavigationMenuLink
                                                    key={category.id}
                                                    href={`/category/${category.slug}`}
                                                    onMouseEnter={() => setActiveCategoryId(category.id)}
                                                >
                                                    {category.name}
                                                </NavigationMenuLink>
                                            ))
                                        }
                                        {
                                            categoryChildren.map(submenu => (
                                                <NavigationMenuLink
                                                    key={submenu.id}
                                                    href={`/category/${submenu.slug}`}
                                                    >
                                                    <NavigationMenuLink>
                                                        {submenu.name}
                                                    </NavigationMenuLink>
                                                </NavigationMenuLink>
                                            ))
                                        }
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                            )
                        }
                        return (
                            <NavigationMenuItem key={item.label}>
                                <NavigationMenuLink href={item.href}>
                                    {item.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })
                }

            </NavigationMenuList>
        </NavigationMenu >
    );
}
