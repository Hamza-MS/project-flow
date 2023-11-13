"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {  TaskStatus, User } from "@prisma/client";
import { now } from "next-auth/client/_utils";
import {getSession} from "next-auth/react";


export const createNewTask = async (formData: FormData) => {
    const session = await getSession();

    const name = formData.get("name") as string | undefined;
    const description = formData.get("description") as string | undefined;
    const projectId = formData.get("projectId") as string | undefined;
    const startDate = formData.get("startDate") as string ;
    const endDate = formData.get("endDate") as string ;
    const completionDate = formData.get("completionDate") as string;

    const status = TaskStatus.BACKLOG;
    const progress = 0;
    const isCompleted = false;
    const createdAt = new Date(now());
    const updatedAt = new Date(now());
    const createdById = session?.user?.id;
    

    

    if (!name || !description || !createdById ) {
        throw new Error("Missing required fields");
    }

    await prisma.task.create({
        data: {
            name,
            description,
            projectId: projectId!,
            status,
            progress,
            isCompleted,
            startDate,
            endDate,
            updatedAt,
            completionDate,
            createdAt,
            createdById,
            type: 'DEFAULT'
        } ,
           
    });

    revalidatePath("/tasks");
}