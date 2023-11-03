"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";
import React from "react";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@radix-ui/react-toast";


type Props = {

    children?: React.ReactNode
};

export function UserAuthForm(props : Props) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const {toast} = useToast()

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Opps! Something went wrong.",
                description: "This wont be ever implemented.",
                action: <ToastAction altText={"Close"}>Close</ToastAction>,
                duration: 1500,
            })
        }, 3000)

    }


    return (
        <div className={"grid gap-6"}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                        )}
                        Sign In with Email
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                </div>
            </div>
            <div className="grid gap-2">
            {props.children}
            </div>
        </div>
    )
}
