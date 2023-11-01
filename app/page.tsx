"use client"

import { Button } from '@/components/ui/button'
import {signOut} from "next-auth/react";
import { useSession } from 'next-auth/react'


export default function Home() {

    const { data: session } = useSession({
        required: true,
    })
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
        <img src={session?.user?.image ?? ""} alt={"user image"} width={100} height={100} className={"rounded-full"}/>
        <h1 className="text-4xl font-bold">Welcome {session?.user?.name}</h1>
        <span className="text-gray-400">id : {session?.user?.id}</span>
        <p className="text-xl">You are signed in!</p>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </main>
  )
}
