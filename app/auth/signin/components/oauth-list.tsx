import * as React from 'react';
import {getProviders, signIn} from "next-auth/react";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";
import OauthButton from "@/app/auth/signin/components/0auth-button";

type Props = {
    callbackUrl?:string
};
const OauthList = async (props: Props) => {

    const providers = await getProviders()

    return (
        <>
            {providers &&
                Object.values(providers).map((provider) => (
                    <OauthButton provider={provider} callbackUrl={props.callbackUrl} key={provider.name}/>
                ))}
        </>
    );
};

export default OauthList;