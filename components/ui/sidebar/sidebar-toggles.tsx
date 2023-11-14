"use client"
import * as React from 'react';
import {ArrowLeft, Moon, Settings, Sun} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
type Props = {

};
const WorkPlaceToggles = (props: Props) => {

    const { setTheme } = useTheme()


    return (
        <div className={"flex w-full items-center  justify-between gap-1 self-baseline border-t border-border bg-custom-sidebar-background-100 py-2 px-4 "}>
            <div>
                <span className={"text-muted-foreground text-xs"}>ProjectFlow</span>
            </div>
            <div className={"self-end flex items-center gap-1 justify-evenly w-1/2"}>
                <Button variant="outline" size="icon">
                    <Settings className="h-[1.2rem] w-[1.2rem]" />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="icon">
                    <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
                </Button>
            </div>
        </div>
    );
};

export default WorkPlaceToggles;