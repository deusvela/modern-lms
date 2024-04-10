"use client";

import { BarChart, Compass, Layout, List } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

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
];

const teacherRoutes = [
    {
        icon: List,
        label: "Мои курсы",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Сбор информации",
        href: "/teacher/analytics",
    },
];

export const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes('/teacher');

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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