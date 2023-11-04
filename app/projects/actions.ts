"use server"

import * as z from "zod";
import {prisma} from "@/lib/prisma";
import {getSession} from "next-auth/react";
import {revalidatePath} from "next/cache";

export const createNewProject = async (formData: FormData) => {

    const formSchema = z.object({
        ownerId: z.string().cuid(),
        emojiIcon: z.string().emoji(),
        name: z.string().min(3).max(50),
        description: z.string().min(0).max(150),
    })
    const data = formSchema.parse({
        ownerId: formData.get("ownerId"),
        emojiIcon: formData.get("emojiIcon"),
        name: formData.get("name"),
        description: formData.get("description"),
    })


    await prisma.project.create({
        data: {
            emojiIcon: data.emojiIcon,
            name: data.name,
            description: data.description,
            ownerId: data.ownerId,
        }
    })
    revalidatePath('/projects')
}

export const deleteProject = async (projectId: string) => {
    await prisma.project.delete({
        where: {
            id: projectId
        }
    })
    revalidatePath('/projects')
}