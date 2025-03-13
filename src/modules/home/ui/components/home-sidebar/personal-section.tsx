"use client"

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link"


const items = [
    {
        title:"History",
        url:"/playlist/history",
        icon:HistoryIcon,
        auth:true 
    },
    {
        title:"Liked Videos",
        url:"/playlist/liked",
        icon:ThumbsUpIcon,
        auth:true 
    },
    {
        title:"All Playlist",
        url:"/playlist",
        icon:ListVideoIcon,
        auth:true  
    },
]

export const PersonalSection = () =>{
    return(
       <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
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