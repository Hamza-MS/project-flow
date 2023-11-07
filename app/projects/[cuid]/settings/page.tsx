// @flow
import * as React from 'react';
import ProjectEditForm from "@/app/projects/[cuid]/settings/components/project-edit-form";
import {prisma} from "@/lib/prisma";
import dateFormat from "dateformat";

const EditProjectPage = async ({params}: { params: { cuid: string } }) => {

    const oldValues = await prisma.project.findUnique({
        where: {
            id: params.cuid
        }
    })


    return (
        <>
            <ProjectEditForm cuid={params.cuid}
                             lastUpdated={dateFormat(oldValues?.createdAt, "mmmm dS, yyyy")}
                             currentDescription={oldValues?.description as string}
                             currentName={oldValues?.name as string}/>
        </>
    );
};

export default EditProjectPage;