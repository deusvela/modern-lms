import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { Send, Headset, Mail } from "lucide-react"

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col relative overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>

            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center">
                <div className="mb-2 text-base text-slate-700/75">
                    Возникли вопросы?
                </div>
                <div className="relative flex justify-center items-center">
                    <a href="https://t.me/+idtyLk2KMIw4ZGUy" className="cursor-pointer p-3 hover:bg-slate-200 rounded-sm transition" style={{ marginRight: '8px' }}>
                        <Send className="h-6 w-6 text-sky-700/75 hover:text-sky-600 transition" />
                    </a>
                    <a href="https://discord.gg/s4gSQNBJ" className="cursor-pointer p-3 hover:bg-slate-200 rounded-sm transition" style={{ marginLeft: '8px' }}>
                        <Headset className="h-6 w-6 text-sky-700/75 hover:text-sky-600 transition" />
                    </a>
                    <a href="mailto:prilukov2002@gmail.com" className="cursor-pointer p-3 hover:bg-slate-200 rounded-sm transition" style={{ marginLeft: '8px' }}>
                        <Mail className="h-6 w-6 text-sky-700/75 hover:text-sky-600 transition" />
                    </a>
                </div>
            </div>
        </div>
    )
}