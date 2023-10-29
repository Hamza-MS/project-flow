import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "messouab"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                //TODO: verify credentials and return user from database
                //  Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = {id: "1", name: "messouab",password: "messouab"};
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null;
                }
            }
        })
    ],

}