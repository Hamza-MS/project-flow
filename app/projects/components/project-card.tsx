"use client"
import * as React from 'react';
import {Pencil1Icon, TrashIcon,} from "@radix-ui/react-icons"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {CalendarDaysIcon} from "lucide-react";
import { useRouter } from 'next/navigation';
type Props = {
    uuid: string,
    emojiIcon: string,
    name: string,
    description: string,
    createdAt: string,
};
const ProjectCard = (props: Props) => {

    const router = useRouter()


    return (
        <Card onClick={() => router.push(`/projects/${props.uuid}/tasks`)}>
            <CardHeader  className={"cursor-pointer"}>
                <div className="space-y-1 overflow-x-clip">
                    <CardTitle className={"truncate"}>{props.emojiIcon} {props.name}</CardTitle>
                    <CardDescription className={"line-clamp-3"}>{props.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <CalendarDaysIcon className="mr-1 h-4 w-4"/>
                        {props.createdAt}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant={"ghost"} size={"icon"} onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            router.push(`/projects/${props.uuid}/edit`)
                        }}>
                            <Pencil1Icon className={"h-4 w-4"}/>
                        </Button>
                        <Button variant={"ghost"} size={"icon"} onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            console.log("delete")
                        }}>
                            <TrashIcon className={"h-4 w-4 text-red-500"}/>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;