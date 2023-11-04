"use client"

import * as z from "zod"
import * as React from 'react';
import EmojiIconPicker from "@/components/emoji-picker";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {emojis} from "@/components/emoji-picker/emoji-list";
import {useSession} from "next-auth/react";
import {prisma} from "@/lib/prisma";
import {useToast} from "@/components/ui/use-toast";
import {createNewProject} from "@/app/projects/new/actions";



const formSchema = z.object({
    emojiIcon: z.string().emoji(),
    name: z.string().min(3).max(50),
    description: z.string().min(0).max(150),
})

type Props = {

};

const ProjectCreateForm = (props: Props) => {

    const  session = useSession({required: true,})
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emojiIcon: emojis[Math.floor(Math.random() * emojis.length)],
            name: "",
            description: "",
        },
    })

    const onSubmit = async (values : FormData) => {
        values.append("emojiIcon", form.getValues("emojiIcon"))
        values.append("ownerId", session?.data?.user?.id as string)
        createNewProject(values).then((res) => {
            toast({
                title: "Project Created",
                description: "Your project has been created successfully",
                duration: 1500,
            })
        }).catch((err) => {
            const errorMessage =JSON.parse(err.message)[0]
            toast({
                variant: "destructive",
                title: "Project Creation Failed",
                description: errorMessage.message,

            })
        })
        console.log(values)
    }

    const [icon, setIcon] = React.useState<string>("")

    return (
            <Form {...form}>
            <form action={onSubmit} className="space-y-4">
                <div className={"flex space-x-2"}>
                    <FormField
                        control={form.control}
                        name="emojiIcon"
                        render={({ field }) => (
                            <FormItem className={"flex flex-col gap-1 mt-auto"}>
                                <FormLabel>Icon</FormLabel>
                                <FormControl>
                                    <EmojiIconPicker value={field.value} setValue={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className={"flex-1"}>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <div className={"flex justify-end space-x-2"}>
                    <Button type={"reset"} variant="outline">Cancel</Button>
                    <Button type={"submit"}>Create Project</Button>
                </div>
            </form>
        </Form>

    );
};

export default ProjectCreateForm;//