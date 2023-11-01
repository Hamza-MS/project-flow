"use client"

import * as React from 'react';
import {useState} from "react";
import {ClientSafeProvider, signIn} from "next-auth/react";
import {Icons} from "@/components/ui/icons";
import {Button} from "@/components/ui/button";

const providerIcon: Record<string, string> = {
    "GitHub": "gitHub",
    "Google": "google",
    "Twitter": "twitter",
}

type Props = {
    provider: ClientSafeProvider,
    callbackUrl?: string
}
const OauthButton = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button key={props.provider.name} variant="outline" type="button" disabled={isLoading} onClick={() => {
            signIn(props.provider.id, {
                redirect: true,
                callbackUrl: props.callbackUrl ?? "http://localhost:3000"
            })
            setIsLoading(true)
        }}>

            {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
            )}
            {props.provider.name == "GitHub" ? (
                    <Icons.gitHub className="mr-2 h-4 w-4"/>
                )
                : props.provider.name == "Google" ? (
                        <Icons.google className="mr-2 h-4 w-4"/>)
                    : (<
                        Icons.react className="mr-2 h-4 w-4"/>)
            }
            {props.provider.name}
        </Button>
    );
};

export default OauthButton;