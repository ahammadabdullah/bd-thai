import prisma from "@/lib/db";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials: Partial<Record<string, unknown>>) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing credentials");
        }
        const dbUser = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!dbUser) {
          throw new Error("Invalid email");
        }

        const isPasswordValid = dbUser.password === credentials.password;
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        const { password, ...userWithoutPassword } = dbUser;
        return userWithoutPassword;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
        token.role = user.role as string;
        token.name = user.name as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (token.email) {
          session.user.email = token.email;
          session.user.role = token.role;
          session.user.name = token.name;
        }
      }
      return session;
    },
  },
};
