"use client";

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar-item";

// Информация об боковой панели (кнопки)
const guestRoutes = [
    {
        icon: Layout,
        label: "Главная",
        href: "/",
    },
    {
        icon: Compass,
        label: "Поиск",
        href: "/search",
    },
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;


    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}