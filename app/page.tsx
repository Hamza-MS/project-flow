"use client"

import { Button } from '@/components/ui/button'
import {signOut} from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => signOut()}>Sign Out</Button>
    </main>
  )
}
