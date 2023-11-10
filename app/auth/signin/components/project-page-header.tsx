// @flow 
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import {getSession} from "next-auth/react";

type Props = {
    children: React.ReactNode
};
const ProjectPageHeader = async (props: Props) => {

    const session = await getSession() // firewall may be blocking this

    return (
        <div
            className={"relative flex w-full flex-shrink-0 flex-row z-10 items-center justify-between gap-x-2 gap-y-4 border-b bg-background px-5 py-4 "}>
            <div className={"flex items-center gap-2 flex-grow w-full whitespace-nowrap overflow-ellipsis"}>
                <Button variant={"outline"} size={"icon"}>
                    <ArrowLeft className={"h-4 w-4"}/>
                </Button>
                <div className={"px-3 text-sm truncate "}>
                    <p className={"truncate"}>{session?.user.name ?? "Yassine-mdn"} Projects</p>
                </div>
            </div>
            {props.children}

        </div>
    );
};

export default ProjectPageHeader;