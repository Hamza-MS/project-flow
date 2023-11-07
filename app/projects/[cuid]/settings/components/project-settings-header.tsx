"use client"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
import {Separator} from "@/components/ui/separator";
import {prisma} from "@/lib/prisma";

type Props = {
};

const ProjectSettingsHeader = async (props: Props) => {

    const pathname = usePathname()
    const router = useRouter()
    const cuid = pathname.split('/')[2]
    const option = pathname.split('/')[4]




    return (
        <div
            className={"relative flex w-full flex-shrink-0 flex-row z-10 items-center justify-between gap-x-2 gap-y-4 border-b bg-background px-5 py-4 "}>
            <div className={"flex items-center gap-2 flex-grow w-full whitespace-nowrap overflow-ellipsis"}>
                <Button variant={"outline"} size={"icon"} onClick={() => router.back()}>
                    <ArrowLeft className={"h-4 w-4"}/>
                </Button>
                <div className={"px-3 text-sm  h-5 items-center flex space-x-4"}>
                    <p>{"project name"}</p>
                    <Separator orientation={"vertical"}/>
                    <p>{option ?? "General Settings"}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectSettingsHeader;