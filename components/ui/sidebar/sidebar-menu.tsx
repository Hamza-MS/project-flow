"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { BarChart2, Briefcase, CheckCircle, LayoutGrid } from "lucide-react";

interface Props {
    sidebarCollapsed: boolean;
}

const workspaceLinks = [
    {
        Icon: LayoutGrid,
        name: "Dashboard",
        href: `/`,
    },
    {
        Icon: BarChart2,
        name: "Analytics",
        href: `/analytics`,
    },
    {
        Icon: Briefcase,
        name: "Projects",
        href: `/projects`,
    },
    {
        Icon: CheckCircle,
        name: "All Issues",
        href: `/issues`,
    },
];

export const WorkspaceSidebarMenu = (props : Props) => {
    // router
    const pathname = usePathname()


    return (
        <div className="w-full cursor-pointer space-y-1 p-4">
            {workspaceLinks.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start w-full gap-2.5 font-medium outline-none py-2 "
                    )}
                >
                    {<item.Icon className={"h-4 w-4 font-medium shrink-0 !text-lg"}/>}
                    {!props.sidebarCollapsed && item.name}
                </Link>
            ))}
        </div>
    )
};