"use client"

import * as React from 'react';
import {getProviders, signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";

type Props = {
    callbackUrl?:string
};
const OauthList = async (props: Props) => {

    const providers = await getProviders()

    return (
        <>
            {providers &&
                Object.values(providers).map((provider) => (
                    <Button key={provider.name} variant="outline" type="button"  onClick={() => signIn(provider.id,{
                        redirect:true,
                        callbackUrl:props.callbackUrl ?? "http://localhost:3000"
                    })}>

                        {provider.name == "GitHub" ?
                            <Icons.gitHub className="mr-2 h-4 w-4"/>
                            :
                            <Icons.google className="mr-2 h-4 w-4"/>
                        }
                        {provider.name}
                    </Button>
                ))}
        </>
    );
};

export default OauthList;