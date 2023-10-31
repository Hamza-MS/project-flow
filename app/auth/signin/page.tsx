import Image from "next/image"
import Link from "next/link"
import {UserAuthForm} from "./components/user-auth-form"
import OauthList from "@/app/auth/signin/components/oauth-list";
import React from "react";
import {toast} from "@/components/ui/use-toast";


type Props = {
    searchParams?: Record<"callbackUrl"|"error", string>
};
const SigninPage = (props: Props) => {


    !!props.searchParams?.error && toast({
        variant: "destructive",
        title: "Opps! Something went wrong.",
        description: props.searchParams?.error,
        duration: 1000,
    })

    return (
        <>
            <div className="md:hidden h-screen w-1/2">
                <Image
                    src="/examples/authentication-light.png"
                    alt="Authentication"
                    layout={"fill"}
                    objectFit={'contain'}
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/authentication-dark.png"
                    alt="Authentication"
                    layout={"fill"}
                    objectFit={'contain'}
                    className="hidden dark:block"
                />
            </div>
            <div
                className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg className={"h-6 w-6"} viewBox="0 0 463 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M226.739 1.40021C169.704 9.24134 121.724 49.0071 103.615 103.522C95.9605 126.578 95.2137 135.073 95.2137 203.216V256.704H47.6069H0V304.777V352.851H47.6069H95.2137V424.728V496.605H142.821H190.427L190.614 319.433V152.272C190.614 120.767 215.981 95.6805 244.802 95.6805C250.053 95.6805 245.035 95.6805 303.377 95.6805H367.32V152.155C367.32 204.149 367.553 171.875 367.553 203.729C367.553 235.584 334.998 255.957 323.447 256.237C311.895 256.517 285.921 256.517 285.921 256.517L248.302 256.797V304.871V352.851H280.32C315.699 352.851 329.607 352.011 343.143 349.024C384.402 340.062 420.247 314.205 442.464 277.147C451.612 261.931 459.359 239.621 461.973 220.952C462.627 216.284 463 191.921 463 154.396V95.2137H415.673L368.253 95.3071L367.973 47.6069L367.786 1.02956e-05L301.697 0.093377C252.783 0.186724 233.367 0.466744 226.739 1.40021Z"
                                fill="white"/>
                        </svg>

                        <span className={"inline-block align-text-bottom pt-2"}>rojectFlow</span>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and
                                helped me deliver stunning designs to my clients faster than
                                ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Hamza El-messouab</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm>
                            <OauthList callbackUrl={props.searchParams?.callbackUrl}/>
                        </UserAuthForm>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SigninPage;