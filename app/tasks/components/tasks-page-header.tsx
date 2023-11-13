// @flow 
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {getSession} from "next-auth/react";
import { SearchInput } from '@/components/ui/search-input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TaskCreateForm } from './task-create-form';


const TasksPageHeader = async () => {

    const session = await getSession() // firewall may be blocking this

    return (
        <div
            className={"relative flex w-full flex-shrink-0 flex-row z-10 items-center justify-between gap-x-2 gap-y-4 border-b bg-background px-5 py-4 "}>
            <div className={"flex items-center gap-2 flex-grow w-full whitespace-nowrap overflow-ellipsis"}>
                <Button variant={"outline"} size={"icon"}>
                    <ArrowLeft className={"h-4 w-4"}/>
                </Button>
                <div className={"px-3 text-sm truncate "}>
                    <p className={"truncate"}>{session?.user.name ?? "Hamza-MS"} Tasks</p>
                </div>
                
            </div>
            <div className={"flex-shrink-0"}>
                    <div className={"flex items-center gap-3"}>
                        <SearchInput/>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>
                                    <PlusIcon className={"h-4 w-4 mr-2"}/>
                                    New Task
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Create a new Task</DialogTitle>
                                    
                                </DialogHeader>
                                <TaskCreateForm/>

                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
        </div>
    );
};

export default TasksPageHeader;