// @flow
import * as React from 'react';
import ProjectPageHeader from "@/app/auth/signin/components/project-page-header";
import {PlusIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {SearchInput} from "@/components/ui/search-input";
import {Dialog} from "@/components/ui/dialog";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import ProjectCreateForm from "@/app/projects/components/project-create-form";

type Props = {
    children: React.ReactNode
};
const Layout = (props: Props) => {
    return (
       <>
           <ProjectPageHeader>
               <div className={"flex-shrink-0"}>
                   <div className={"flex items-center gap-3"}>
                        <SearchInput/>
                       <Dialog>
                           <DialogTrigger asChild>
                               <Button>
                                   <PlusIcon className={"h-4 w-4 mr-2"}/>
                                   Add Project
                               </Button>
                           </DialogTrigger>
                           <DialogContent>
                               <DialogHeader>
                                   <DialogTitle>Start a new Project?</DialogTitle>
                                   <DialogDescription>
                                       This form is your first step to kickstart your project. Fill it out with the necessary details to get started
                                   </DialogDescription>
                               </DialogHeader>
                               <ProjectCreateForm/>

                           </DialogContent>
                       </Dialog>
                   </div>
               </div>
           </ProjectPageHeader>
           {props.children}
       </>
    );
};

export default Layout;