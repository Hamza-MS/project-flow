// @flow 
import * as React from 'react';
import ProjectCard from "@/app/projects/components/project-card";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "@radix-ui/react-icons";
import {prisma} from "@/lib/prisma";
import {getSession} from "next-auth/react";
import dateFormat from "dateformat";
import {Project} from "@prisma/client";

type Props = {
    
};
const ProjectPage = async (props: Props) => {

    const session = await getSession()

    const projects : Project[] = await prisma.project.findMany(
        {
            where:{
                ownerId: session?.user.id
            },
            orderBy:{
                createdAt: "desc"
            }
        }
    )

    return (
        <div className={"h-full w-full overflow-hidden"}>
            {projects.length > 0 ? (
                <div className={"h-full p-8 overflow-y-auto"}>
                    <div className={"grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                uuid={project.id}
                                emojiIcon={project.emojiIcon}
                                name={project.name}
                                description={project.description}
                                createdAt={dateFormat(project.createdAt, "mmmm dS, yyyy")}
                            />
                        ))}
                    </div>
                </div>
            ):(
                <div className={"relative h-full w-full overflow-x-hidden overflow-y-scroll"}>
                    <div className={"h-full w-full overflow-hidden"}>
                        <div className={"h-full w-full mx-auto grid place-items-center p-8 md:w-4/5 lg:w-3/5"}>
                            <div className={"text-center flex flex-col items-center w-full"}>
                                <h6 className={"text-3xl font-semibold text-muted"}>O﹏o</h6>
                                <h6 className={"text-xl font-semibold mt-6 sm:mt-8 mb-3"}>No projects yet</h6>
                                <p className={"text-sm text-muted-foreground  mb-7 sm:mb-8"}>Create a project to get started</p>
                                <Button>
                                    <PlusIcon className={"h-4 w-4 mr-2"}/>
                                    Create Project
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </div>
    );
};

export default ProjectPage;