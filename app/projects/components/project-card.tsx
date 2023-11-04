"use client"
import * as React from 'react';
import {ExclamationTriangleIcon, Pencil1Icon, TrashIcon,} from "@radix-ui/react-icons"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {CalendarDaysIcon} from "lucide-react";
import {useRouter} from 'next/navigation';
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {deleteProject} from "@/app/projects/actions";
import {useToast} from "@/components/ui/use-toast";

type Props = {
    uuid: string,
    emojiIcon: string,
    name: string,
    description: string,
    createdAt: string,
};
const ProjectCard = (props: Props) => {

    const router = useRouter()
    const [formField, setFormField] = React.useState("")
    const {toast} = useToast()

    const onDelete = async () => {
        deleteProject(props.uuid).then((res) => {
            toast({
                title: "Project Deleted",
                description: "Your project has been deleted successfully",
                duration: 1500,
            })
        }).catch((err) => {
            toast({
                variant: "destructive",
                title: "Project Deletion Failed",
                description: err.message,
                duration: 1500,
            })
        })
    }


    return (
        <Card onClick={() => router.push(`/projects/${props.uuid}/tasks`)} className={"flex flex-col justify-between"}>
            <CardHeader className={"cursor-pointer"}>
                <div className="space-y-1 overflow-x-clip">
                    <CardTitle>{props.emojiIcon} {props.name}</CardTitle>
                    <CardDescription className={"line-clamp-3"}>{props.description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <CalendarDaysIcon className="mr-1 h-4 w-4"/>
                        {props.createdAt}
                    </div>
                    <div className="flex items-center space-x-2" onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                    }}>
                        <Button variant={"ghost"} size={"icon"} onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            router.push(`/projects/${props.uuid}/edit`)
                        }}>
                            <Pencil1Icon className={"h-4 w-4"}/>
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"ghost"} size={"icon"}>
                                    <TrashIcon className={"h-4 w-4 text-red-500"}/>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className={"flex w-full items-center justify-start gap-6"}>
                                        <span className={"place-items-center rounded-full bg-red-500/20 p-4"}>
                                            <ExclamationTriangleIcon className={"h-6 w-6 text-red-500"}/>
                                        </span>
                                        Are you sure absolutely sure?
                                    </DialogTitle>
                                    <DialogDescription>
                                        Are you sure you want to delete project <b>{props.name}</b>? All of the data
                                        related to the project will be permanently removed. This action cannot be undone
                                    </DialogDescription>
                                </DialogHeader>
                                <div className={"flex flex-col w-full justify-end gap-4 mt-6"}>
                                    <p className={"text-sm text-muted-foreground"}>Enter the project name <b
                                        className={"text-foreground"}>{props.name}</b> to confirm:</p>
                                    <Input placeholder={"Project name"} className={"w-full"} value={formField}
                                           onChange={
                                               (e) => setFormField(e.target.value)}
                                    />
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                            <Button variant={"destructive"} onClick={onDelete}
                                                    disabled={formField !== props.name}>Delete Project</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;