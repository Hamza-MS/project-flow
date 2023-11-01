import {DefaultSession, NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"];
    }
}

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    session: {
        strategy: 'jwt',
    },
    // workaround for getting user id in session
    callbacks: {
        async session({ session, token, user }) {
            if (session?.user) {
                // @ts-expect-error Property id does not exist
                session.user.id = user?.id || token?.sub;
            }
            return session
        }
    },
    adapter: PrismaAdapter(prisma),
    pages:{
        signIn: '/auth/signin',
    },
}