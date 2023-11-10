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
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/components/ui/use-toast";
import {updateProject} from "@/app/projects/actions";
import { useFormStatus } from 'react-dom'
import {Icons} from "@/components/ui/icons";


const formSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(0).max(150),
})

type Props = {
    cuid: string,
    currentName: string,
    currentDescription: string,
    lastUpdated: string,
};

const ProjectEditForm = (props: Props) => {

    const {toast} = useToast()
    const { pending } = useFormStatus()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: props.currentName,
            description: props.currentDescription,
        },
    })

    const onSubmit = async (values: FormData) => {
        values.append("id", props.cuid)
        updateProject(values).then((res) => {
            toast({
                title: "Project Updated",
                description: "Your project has been updated successfully",
                duration: 1500,
            })
        }).catch((err) => {
            const errorMessage = JSON.parse(err.message)[0]
            toast({
                variant: "destructive",
                title: "Project update Failed",
                description: errorMessage.message,

            })
        })
    }


    return (
        <Form {...form}>
            <form action={onSubmit} className="space-y-4">

                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem className={"flex-1"}>
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter a new name for your project
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} />
                            </FormControl>
                            <FormDescription>
                                Describe your project in a few words
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <div className={"flex justify-between space-x-2"}>
                    <Button type={"submit"} disabled={pending}>
                        {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>}
                        Update Project
                    </Button>
                    <h6 className={"text-sm text-muted-foreground"}>Last Updated at {props.lastUpdated}</h6>
                </div>
            </form>
        </Form>

    );
};

export default ProjectEditForm;//