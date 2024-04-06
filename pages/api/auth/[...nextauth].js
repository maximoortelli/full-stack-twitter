import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
     signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    jwt: true,
  },
  callbacks: {
    session: async ({token, session}) => {
      if(session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
}
export default NextAuth(authOptions);