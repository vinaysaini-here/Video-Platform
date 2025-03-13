"use client"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link"
import { it } from "node:test"

const items = [
    {
        title:"Home",
        url:"/",
        icon:HomeIcon,
    },
    {
        title:"Suscriptions",
        url:"/feed/suscriptions",
        icon:PlaySquareIcon,
        auth:true 
    },
    {
        title:"Trending",
        url:"/feed/trending",
        icon:FlameIcon,
    },
]

export const MainSection = () =>{
    return(
       <SidebarGroup>
        <SidebarGroupContent>
            <SidebarMenu>
                {items.map((item)=>(
                    <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={false}
                    onClick={()=>{}}
                    >
                     <Link href={item.url} className="flex items-center gap-4 ">
                     <item.icon/>
                     <span className="text-sm">{item.title}</span>
                     </Link>                          
                    </SidebarMenuButton>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
       </SidebarGroup>
    )
}