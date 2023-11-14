// @flow 
import * as React from 'react';
import {getSession} from "next-auth/react";
import {Project} from "@prisma/client";
import {prisma} from "@/lib/prisma";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ProjectSidebarOptions from "@/components/ui/sidebar/sidebar-project-options";

type Props = {
};
const ProjectSidebarList = async (props: Props) => {

    const session = await getSession()

    const projects: Project[] = await prisma.project.findMany(
        {
            where: {
                users:{
                    some:{
                        userId: session?.user.id
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        }
    )

    return (
        <div className={"h-full overflow-y-auto px-4 space-y-3 pt-3 "}>
            <div className={"flex flex-col space-y-2"}>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className={"border-0 py-1"}>
                        <AccordionTrigger className={"py-1 px-2 hover:no-underline hover:bg-muted rounded-md"}>
                            <span className={"text-muted-foreground text-xs"}>Projects</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className={"space-y-2 mt-1 ml-1"}>
                                {projects.map((project) => (
                                    <ProjectSidebarOptions name={project.name} id={project.id} emojiIcon={project.emojiIcon} key={project.id}/>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    );
};

export default ProjectSidebarList;