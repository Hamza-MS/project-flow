"use client"
import * as React from 'react';
import {useSession} from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {ExitIcon, GearIcon, PersonIcon} from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation'
import {signOut} from "next-auth/react";



type Props = {
};
const WorkspaceSidebarDropdown = (props: Props) => {

    const {data: session} = useSession({
        required: true,
    })
    const router = useRouter()

    return (
        <div className={"inline-flex items-center gap-2 px-4 pt-4"}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}
                            className={"flex items-center justify-start w-full gap-2.5 text-foreground font-medium text-sm px-1 overflow-x-clip"}>

                        <Avatar className={"h-8 w-8 rounded-md"}>
                            <AvatarImage src={session?.user?.image ?? ""}/>
                            <AvatarFallback className={"rounded-md"}>YM</AvatarFallback>
                        </Avatar>

                        {session?.user?.name}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={"md:w-[250px]"}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => router.push(`/profile/${session?.user?.id}`)}>
                        <PersonIcon className={"w-4 h-4 mr-2"}/>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`profile/${session?.user?.id}/settings`)}>
                        <GearIcon className={"w-4 h-4 mr-2"}/>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                        <ExitIcon className={"w-4 h-4 mr-2 text-red-600"}/>
                        <span className={"text-red-600"}>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default WorkspaceSidebarDropdown;