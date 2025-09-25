"use client"

import { IconType } from "react-icons";
import SuspenseImage from "@/components/SuspenseImage/SuspenseImage";
import { redirect } from "next/navigation";

// Icons
import { GoProjectSymlink } from "react-icons/go"; //Projects



export default function Navbar(){
    return (
        <nav className="w-screen h-fit bg-theme-white-100 p-2 flex border-b-[1px] border-theme-white-200 cursor-pointer">
            <div 
            onClick={()=>redirect("/")}
            className="flex items-center gap-1 group/navbar">
                <SuspenseImage 
                    src="/rounded-logo.png" alt="Our Logo" 
                    className="w-10 h-10 object-cover rounded-full transition-all group-hover/navbar:shadow-xl group-hover/navbar:translate-z-3"
                    />
                <p 
                    className="font-bricolage-grotesque font-bold text-lh"
                    >
                    THS CS Club
                </p>
            </div>
        </nav>
    )
}


interface NavbarButtonProps {
    title: string;
    icon: IconType;
}

export function NavbarButton({ title, icon }: NavbarButtonProps){

}