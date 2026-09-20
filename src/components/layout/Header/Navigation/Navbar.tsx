"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navItems } from "@/components/data/navItems"
import { useState } from "react";
import { categories } from "@/components/data/categories";



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
                                            categoryParents.map((child) => (
                                                <NavigationMenuItem
                                                    key={child.id}
                                                    onMouseEnter={() => setActiveCategoryId(child.id)}
                                                >
                                                    {child.name}
                                                </NavigationMenuItem>
                                            ))
                                        }
                                        {
                                            categoryChildren.map(submenu => (
                                                <NavigationMenuItem
                                                    key={submenu.id}>
                                                    <NavigationMenuLink>
                                                        {submenu.name}
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
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
